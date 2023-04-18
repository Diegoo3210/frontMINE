import LeftSideBar from "../components/LeftSideBar";
import UpperBar from "../components/UpperBar";
import DashBoard from "../components/DashBoard";
import "./HomePage.css";
import PersonCard from "../components/personCard/PersonCard";
import uni from "../asset/logo-uniandes.png";
import diego_photo from "../asset/DiegoPhoto.png";
import juli_photo from "../asset/Juli.jpg";
import React from "react";

function HomePage() {
  return (
    <div className="row">
      <LeftSideBar />
      <div className="col">
        <UpperBar />
        <DashBoard tittle="HomePage" />
        <div className="container-text">
          <p className="presenteacion">
            ¡Hola a todos! En esta materia, utilizaremos una plataforma en línea
            para visualizar los resultados de nuestras tareas y proyectos. La
            plataforma es una herramienta esencial para nuestro trabajo en esta
            materia de análisis de información sobre big data. La plataforma es
            fácil de usar y nos permitirá compartir y colaborar en nuestros
            trabajos con facilidad. Podremos subir nuestros datos y
            visualizarlos en diferentes formatos, realizar análisis y crear
            visualizaciones interactivas para presentar nuestros hallazgos.
            Además, la plataforma nos permitirá trabajar en equipo y compartir
            nuestros proyectos con nuestros compañeros de manera segura y
            confiable. Espero que disfruten explorando y utilizando esta
            herramienta en nuestras tareas y proyectos.
          </p>
        </div>
        <h3>Sobre Los estudiantes</h3>
        <div className="row">
          <PersonCard
            image={juli_photo}
            name={"Juliana Galeano"}
            description={"Hola soy Juliana"}
          ></PersonCard>
          <PersonCard
            image={uni}
            name={"Ericg Soto"}
            description={"Hola soy Ericg"}
          ></PersonCard>
          <PersonCard
            image={diego_photo}
            name={"Diego Rodriguez"}
            description={"Hola soy Diego"}
          ></PersonCard>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
