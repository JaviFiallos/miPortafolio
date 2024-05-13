import React from "react";
import './ContactMeCard.css';

const ContactMeCard = ({ iconURL, text }) =>{

    return (
        <div className="contact-details-card">
            <div className="icon">
                <img src={iconURL} alt={text}/>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
}

export default ContactMeCard;