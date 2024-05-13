import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="intro-contenedor">
      <div className="intro-contenido">
        <h2>Desarrollando un mejor futuro</h2>
        <p>
          Un apasionado por el desarrollo de aplicaciones web | Transformando
          pequeñas ideas en grandes proyectos Con estos pasos, deberías poder reducir el tamaño del archivo de imagen javiFiallos.jpg y utilizar la versión reducida en tu aplicación React. Recuerda asegurarte de que la ruta de la imagen esté correctamente actualizada en tu código y que hayas aplicado los estilos CSS necesarios según tus requisitos de diseño.
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
