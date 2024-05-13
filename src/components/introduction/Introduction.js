import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <>
      <section className="intro-contenedor">
        <div className="intro-contenido">
          <h2>Desarrollando un mejor futuro</h2>
          <p>
            Un apasionado por el desarrollo de aplicaciones web | Transformando
            pequeñas ideas en grandes proyectos
          </p>
        </div>
        <div className="profile-img">
          <div >
            <img className="javi-img" src="./assets/images/javiFiallos.jpg" alt=""/>
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
    </>
  );
};

export default Introduction;
