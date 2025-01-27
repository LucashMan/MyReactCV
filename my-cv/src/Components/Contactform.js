import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/ContactForm.css"


const ContactForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17y3xak",
        "template_6y934dl",
        form.current, 
        { publicKey: "inRNlB7AaiJtiWnDw" }
      )
      .then(
        () => {
          setSuccessMessage("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="mcv-contactform">
      <form ref={form} onSubmit={sendEmail} className="mcv-formcontainer">
        <h2>Contactez-moi</h2>
        <input type="text" name="from_name" className="mcv-input" placeholder="Votre nom" required />
        <input type="text" name="from_firstname" className="mcv-input" placeholder="Votre prénom" required />
        <input type="email" name="from_email" className="mcv-input" placeholder="Votre email" required />
        <textarea name="message" className="mcv-textarea" placeholder="Votre message" required />
        <button type="submit" className="mcv-button">Envoyer</button>
      </form> 
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default ContactForm;
