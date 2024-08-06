import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('error sending email', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type='text'
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type='email'
        placeholder='Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <textarea
        placeholder='Your Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.textarea}
      />
      <input type='submit' value='Send Email' className={styles.button} />
    </form>
  );
};

export default Contact;