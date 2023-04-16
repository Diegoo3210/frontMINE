import LeftSideBar from "../components/LeftSideBar";
import UpperBar from "../components/UpperBar";
import DashBoard from "../components/DashBoard";
import React, { useState } from "react";
import "./Taller1.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Taller1() {
  var dir = "http://127.0.0.1:8000/getRequest";

  const links = [
    "http://127.0.0.1:8000/getRequest/A",
    "http://127.0.0.1:8000/getRequest/B",
    "http://127.0.0.1:8000/getRequest/C",
    "http://127.0.0.1:8000/getRequest/D",
    "http://127.0.0.1:8000/getRequest/E",
    "http://127.0.0.1:8000/getRequest/F",
    "http://127.0.0.1:8000/getRequest/F",
  ];
  const opctionName = ["BQ1", "BQ2", "BQ3", "BQ4", "BQ5", "PBQ1", "PBQ2"];

  const bsQuestions = [
    "¿Cuál es el estado con mayor tráfico de botes en un periodo dado?",
    "¿Cuál es el tipo de carga más común por estado, en un periodo dado?",
    "¿Qué tanto afectó la pandemia al tráfico de embarcaciones teniendo en cuenta el número de embarcaciones por mes en cada estado en años anteriores?",
    "¿Cómo es la distribución geográfica, en un periodo dado, de las embarcaciones?",
    "¿Existe alguna relación entre el día de la semana y el tipo de carga en cada estado?¿La relación cambia por año?",
    "Personalizar ",
    "Personalizar 2 ",
  ];
  const iconLinks = document.querySelectorAll(".icon-bar a");

  const dataHeat = [
    { x: 0, y: 0, value: 1 },
    { x: 0, y: 1, value: 2 },
    { x: 0, y: 2, value: 3 },
    { x: 1, y: 0, value: 4 },
    { x: 1, y: 1, value: 5 },
    { x: 1, y: 2, value: 6 },
    { x: 2, y: 0, value: 7 },
    { x: 2, y: 1, value: 8 },
    { x: 2, y: 2, value: 9 },
  ];

  iconLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Remove the active class from all links
      iconLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add the active class to the clicked link
      this.classList.add("active");
    });
  });

  const [active, setActive] = useState(0);
  const handleIconClick = (index) => {
    setActive(index);
  };
  const [data, setData] = useState(null);

  const handleClick = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  const buttonFunt = (index, url) => {
    handleClick(url);
    handleIconClick(index);
  };

  const handleAnswer = (data) => {
    if (active === 0) {
      return (
        <div>
          <DatePicker label="Basic date picker" />
        </div>
      );
    } else if (active === 4) {
      return <div>hola</div>;
    }
    return <div>{data}</div>;
  };

  const handleInputs = () => {
    if (active === 0) {
      return <div></div>;
    }
  };
  return (
    <div className="row">
      <LeftSideBar />

      <div className="col">
        <UpperBar />
        <DashBoard tittle="Taller1" />

        <h4>Por Favor Seleccione Una opcion</h4>

        <div className="icon-bar-wrapper">
          {" "}
          <div className="icon-bar">
            {links.map((icon, index) => (
              <span
                className={active === index ? "active" : ""}
                onClick={() => buttonFunt(index, icon)}
              >
                <div class="btn-tittle">{opctionName[index]}</div>
              </span>
            ))}
          </div>
        </div>
        <div className="display">
          <p>{bsQuestions[active]}</p>
          {handleAnswer(JSON.stringify(data))}
          {handleInputs()}
        </div>
      </div>
    </div>
  );
}

export default Taller1;
