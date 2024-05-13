import React from "react";
import "./ContactMe.css";
import "./ContactMeCard/ContactMeCard";
import ContactMeCard from "./ContactMeCard/ContactMeCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contáctame</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactMeCard
            iconURL={"./assets/images/mailcon.png"}
            text={"efiallos2434@uta.edu.ec"}
          />
          <ContactMeCard
            iconURL={"./assets/images/githubIcon.svg"}
            text={"github@uta.edu.ec"}
          />
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm />
        </div>
      </div>
      <div className="iconos-contacto">
        <button className="boton" id="boton1"></button>
        <button className="boton" id="boton2"></button>
        <button className="boton" id="boton3"></button>
        <button className="boton" id="boton4"></button>

      </div>
    </section>
  );
};

export default ContactMe;
