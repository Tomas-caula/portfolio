import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_r5e52oi';
    const templateId = 'template_yami4or';
    const publicKey = 'Xz6VmElR43MwQ4HJs';

    const templateParams = {
      Nombre: name,
      Email: email,
      Mensaje: message,
      Asunto: 'Contacto desde el portfolio',
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('email sent successfully', response);
        toast.success('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('error sending email', error);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className={styles.contactContainer}>
      <ToastContainer position="top-right" />
      <form onSubmit={handleSubmit} className={`${styles.form} ${styles.largeForm}`}>
        <h2 className={styles.formTitle}>Contact Us</h2>
        <input
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${styles.input} ${styles.largeInput}`}
        />
        <input
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${styles.input} ${styles.largeInput}`}
        />
        <textarea
          placeholder='Your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${styles.textarea} ${styles.largeTextarea}`}
        />
        <input type='submit' value='Send Email' className={`${styles.button} ${styles.largeButton}`} />
      </form>
    </div>
  );
};

export default Contact;