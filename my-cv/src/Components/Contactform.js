import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const FormContainer = styled.div`
  background: #1e1e1e;
  padding: 20px;
  margin: 20px auto;
  max-width: 500px;
  border-radius: 8px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  font-size: 1em;
`;

const Button = styled.button`
  background: #ffcc00;
  color: #121212;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Remplace par ton Service ID EmailJS
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Remplace par ton Template ID
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID // Remplace par ton User ID EmailJS
      )
      .then(
        (response) => {
          console.log("Message envoyé !", response.status, response.text);
          setSuccessMessage("Message envoyé avec succès !");
        },
        (error) => {
          console.log("Échec de l'envoi...", error);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <FormContainer>
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
        <TextArea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required />
        <Button type="submit">Envoyer</Button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </FormContainer>
  );
}

export default ContactForm;
