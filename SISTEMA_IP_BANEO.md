# 🔒 Sistema de Captura de IP y Baneo

Este sistema implementa un mecanismo de seguridad para capturar la IP de los remitentes de mensajes de contacto y permite baneo automático por spam.

## 🚀 Características

### ✅ Captura de IP
- Detecta automáticamente la IP real del remitente
- Soporta múltiples headers (X-Forwarded-For, X-Real-IP, CF-Connecting-IP)
- Incluye la IP en el email enviado para seguimiento

### 🛡️ Sistema de Baneo
- **Rate Limiting**: Máximo 5 intentos por hora por IP
- **Baneo Automático**: IPs que exceden el límite son baneadas automáticamente
- **Almacenamiento**: Lista de IPs baneadas en memoria (se reinicia al reiniciar el servidor)

### 📊 Panel de Administración
- Vista de estadísticas en tiempo real
- Lista de IPs baneadas
- Funcionalidad para desbanear IPs
- Historial de intentos de contacto

## 📁 Archivos Implementados

### 1. `src/pages/api/contact.js`
Endpoint API que maneja:
- Captura de IP del remitente
- Validación de formulario
- Rate limiting y baneo automático
- Envío de emails con información de IP
- Endpoints de administración (GET/DELETE)

### 2. `src/components/ContactForm.jsx`
Formulario de contacto actualizado:
- Usa el nuevo endpoint API
- Manejo de errores específicos (403, 429)
- Validación mejorada
- Reinicio automático del formulario

### 3. `src/pages/admin.astro`
Panel de administración:
- Interfaz web para gestionar IPs baneadas
- Estadísticas en tiempo real
- Funcionalidad para desbanear IPs
- Diseño responsive y moderno

## 🔧 Configuración

### 1. Clave de Administrador
Cambia la clave de administrador en los archivos:
- `src/pages/api/contact.js` (línea 108 y 130)
- `src/pages/admin.astro` (línea 218)

```javascript
// Cambia esto por una clave segura
const ADMIN_KEY = 'tu_clave_admin_secreta';
```

### 2. Configuración de EmailJS
Los parámetros de EmailJS están configurados en `src/pages/api/contact.js`:
```javascript
const serviceId = 'service_r5e52oi';
const templateId = 'template_yami4or';
const publicKey = 'Xz6VmElR43MwQ4HJs';
```

### 3. Límites de Rate Limiting
Puedes ajustar los límites en `src/pages/api/contact.js`:
```javascript
// Limitar a 5 intentos por hora
if (attempts.count >= 5) {
  return false;
}

// Resetear contador si han pasado más de 1 hora
if (now - attempts.lastAttempt > 60 * 60 * 1000) {
  attempts.count = 0;
}
```

## 🌐 Uso

### Formulario de Contacto
1. Los usuarios llenan el formulario normalmente
2. El sistema captura automáticamente su IP
3. Se valida el rate limiting
4. Si es exitoso, se envía el email con la IP incluida
5. Si excede el límite, la IP se banea automáticamente

### Panel de Administración
Accede a: `http://tu-dominio.com/admin`

Funcionalidades:
- **Ver estadísticas**: Número de IPs baneadas e intentos de contacto
- **Lista de IPs baneadas**: Ver todas las IPs actualmente baneadas
- **Desbanear IPs**: Hacer clic en "Desbanear" para remover una IP de la lista
- **Actualizar datos**: Botón para refrescar la información

## 📧 Información en el Email

Cada email enviado incluye:
- Nombre del remitente
- Email del remitente
- Mensaje
- **IP del remitente** (nuevo)
- **Fecha y hora** (nuevo)

## ⚠️ Consideraciones de Producción

### 1. Almacenamiento Persistente
El sistema actual usa almacenamiento en memoria. Para producción, considera:
- Base de datos (PostgreSQL, MongoDB)
- Redis para rate limiting
- Sistema de logs persistente

### 2. Seguridad
- Cambia la clave de administrador por defecto
- Implementa autenticación real para el panel de admin
- Considera usar HTTPS
- Implementa rate limiting más sofisticado

### 3. Monitoreo
- Logs de IPs baneadas
- Alertas por spam masivo
- Métricas de uso del formulario

## 🔍 Debugging

### Ver IPs en Consola
Las IPs baneadas se muestran en la consola del servidor:
```
IP 192.168.1.100 ha sido baneada
Email enviado exitosamente desde IP: 192.168.1.101
```

### Verificar Rate Limiting
En el panel de administración puedes ver:
- Número de intentos por IP
- Último intento de cada IP
- Estado de baneo

## 🚨 Códigos de Error

- **403**: IP baneada
- **429**: Demasiados intentos (IP baneada automáticamente)
- **400**: Datos del formulario inválidos
- **500**: Error interno del servidor

## 📈 Próximas Mejoras

1. **Base de datos persistente** para IPs baneadas
2. **Sistema de logs** más detallado
3. **Notificaciones** por email cuando se banea una IP
4. **Whitelist** de IPs confiables
5. **Análisis de patrones** de spam
6. **Captcha** para formularios sospechosos
