import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Función para validar el formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    if (!email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    // Validar mensaje
    if (!message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para limpiar el formulario
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviar
    if (!validateForm()) {
      toast.error('Por favor corrige los errores en el formulario');
      return;
    }

    setIsLoading(true);

    const serviceId = 'service_r5e52oi';
    const templateId = 'template_yami4or';
    const publicKey = 'Xz6VmElR43MwQ4HJs';

    const templateParams = {
      Nombre: name,
      Email: email,
      Mensaje: message,
      Asunto: 'Contacto desde el portfolio',
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('email sent successfully', response);
      toast.success('¡Mensaje enviado exitosamente!');
      resetForm(); // Reiniciar el formulario después del envío exitoso
    } catch (error) {
      console.log('error sending email', error);
      toast.error('Error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <ToastContainer position="top-right" />
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <h2 className={styles.formTitle}>Contact Us</h2>

        <div className={styles.inputGroup}>
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) {
                setErrors(prev => ({ ...prev, name: '' }));
              }
            }}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.inputGroup}>
          <input
            placeholder='Your Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors(prev => ({ ...prev, email: '' }));
              }
            }}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.inputGroup}>
          <textarea
            placeholder='Your Message'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) {
                setErrors(prev => ({ ...prev, message: '' }));
              }
            }}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            resize="none"
          />
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>

        <input
          type='submit'
          value={isLoading ? 'Enviando...' : 'Send Email'}
          className={`${styles.button} ${styles.largeButton} ${isLoading ? styles.buttonDisabled : ''}`}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Contact;