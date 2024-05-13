import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="intro-contenedor">
      <div className="intro-contenido">
        <h2>Hola! Soy JaviF un apasionado del desarrollo web</h2>
        <p>
        Soy un entusiasta del mundo digital con un enfoque especial en el desarrollo web. Si bien mi dominio del lenguaje Java es sólido, mi verdadera pasión radica en el ámbito del front-end. Me encanta trabajar en la creación de experiencias únicas en línea, explorando nuevas tecnologías y tendencias para hacer que mis páginas destaquen con un estilo distintivo.
        </p>
      </div>

      <div className="profile-img">
          <div>
            <img
              className="javi-img"
              src="./assets/images/javiFiallos.jpg"
              alt=""
            />
          </div>

          <div>
            <div className="tech-icon">
              <img src="./assets/images/javaIcon.svg" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/javaScriptIcon.svg" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/cssIcon.svg" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/images/html5Icon.svg" alt="" />
            </div>
          </div>

        </div>
    </section>
  );
};

export default Introduction;
