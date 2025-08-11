// Almacenamiento simple en memoria (en producción usarías una base de datos)
const bannedIPs = new Set();
const contactAttempts = new Map(); // IP -> { count: number, lastAttempt: Date }

// Función para obtener la IP real del cliente
function getClientIP(request) {
    // Intentar obtener la IP de diferentes headers
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const cfConnectingIP = request.headers.get('cf-connecting-ip');

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    if (realIP) {
        return realIP;
    }
    if (cfConnectingIP) {
        return cfConnectingIP;
    }

    // Fallback a la IP del servidor (no ideal)
    return request.headers.get('host') || 'unknown';
}

// Función para verificar si una IP está baneada
function isIPBanned(ip) {
    return bannedIPs.has(ip);
}

// Función para verificar límite de intentos
function checkRateLimit(ip) {
    const now = new Date();
    const attempts = contactAttempts.get(ip) || { count: 0, lastAttempt: now };

    // Resetear contador si han pasado más de 1 hora
    if (now - attempts.lastAttempt > 60 * 60 * 1000) {
        attempts.count = 0;
    }

    // Limitar a 5 intentos por hora
    if (attempts.count >= 5) {
        return false;
    }

    attempts.count++;
    attempts.lastAttempt = now;
    contactAttempts.set(ip, attempts);

    return true;
}

// Función para banear una IP
function banIP(ip) {
    bannedIPs.add(ip);
    console.log(`IP ${ip} ha sido baneada`);
}

export async function POST({ request }) {
    try {
        const clientIP = getClientIP(request);

        // Verificar si la IP está baneada
        if (isIPBanned(clientIP)) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Tu IP ha sido baneada por múltiples intentos de spam.'
            }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Verificar límite de intentos
        if (!checkRateLimit(clientIP)) {
            banIP(clientIP);
            return new Response(JSON.stringify({
                success: false,
                message: 'Demasiados intentos de envío. Tu IP ha sido baneada temporalmente.'
            }), {
                status: 429,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const body = await request.json();
        const { name, email, message } = body;

        // Validación básica
        if (!name || !email || !message) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Todos los campos son requeridos.'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Configuración de EmailJS
        const serviceId = 'service_r5e52oi';
        const templateId = 'template_yami4or';
        const publicKey = 'Xz6VmElR43MwQ4HJs';

        const templateParams = {
            Nombre: name,
            Email: email,
            Mensaje: message,
            Asunto: 'Contacto desde el portfolio',
            IP_Remitente: clientIP,
            Fecha: new Date().toISOString()
        };

        // Enviar email usando EmailJS desde el servidor
        const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                template_params: templateParams
            })
        });

        if (!emailjsResponse.ok) {
            throw new Error('Error al enviar email');
        }

        console.log(`Email enviado exitosamente desde IP: ${clientIP}`);

        return new Response(JSON.stringify({
            success: true,
            message: 'Mensaje enviado exitosamente.',
            ip: clientIP
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error al enviar email:', error);

        return new Response(JSON.stringify({
            success: false,
            message: 'Error al enviar el mensaje. Por favor intenta de nuevo.'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// Endpoint para obtener IPs baneadas (solo para administración)
export async function GET({ request }) {
    const url = new URL(request.url);
    const adminKey = url.searchParams.get('admin_key');

    // Verificación básica de administrador (en producción usarías autenticación real)
    if (adminKey !== 'tu_clave_admin_secreta') {
        return new Response(JSON.stringify({ error: 'No autorizado' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify({
        bannedIPs: Array.from(bannedIPs),
        contactAttempts: Object.fromEntries(contactAttempts)
    }), {
        headers: { 'Content-Type': 'application/json' }
    });
}

// Endpoint para desbanear IPs
export async function DELETE({ request }) {
    const url = new URL(request.url);
    const adminKey = url.searchParams.get('admin_key');
    const ipToUnban = url.searchParams.get('ip');

    if (adminKey !== 'tu_clave_admin_secreta') {
        return new Response(JSON.stringify({ error: 'No autorizado' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (ipToUnban) {
        bannedIPs.delete(ipToUnban);
        contactAttempts.delete(ipToUnban);

        return new Response(JSON.stringify({
            success: true,
            message: `IP ${ipToUnban} desbaneada exitosamente.`
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify({ error: 'IP no especificada' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
    });
}
