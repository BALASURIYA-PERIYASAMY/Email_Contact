import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const Index = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x111h0y', 'template_95vlntu', form.current, {
        publicKey: 'ZfErzw9v_BoeCUjzl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your Message was send Successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Index;
