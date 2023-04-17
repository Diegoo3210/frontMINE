import LeftSideBar from "../components/LeftSideBar";
import UpperBar from "../components/UpperBar";
import DashBoard from "../components/DashBoard";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Taller1.css";
import CustomDatePicker from "../components/datePicker/CustomDatePicker";
import ColumnChart from "../components/charts/columnChart";
function Taller1() {
  // Column chart     ___________________________________________________________________________________
  const [yearChartSelector, setYearChartSelector] = "2017";
  const dataChart = [
    ["Meses ", "datos1", "datos2"],
    ["Febrero", 200, -200],
    ["Marzo", 600, -200],
    ["Abril", 200, -200],
    ["Mayo", 300, -200],
    ["Junio", 100, 200],
  ];
  //_____________________________________________________________________________________________________

  // Date Pickers Vars___________________________________________________________________________________
  const minValidDate = new Date("01/01/2017");
  const maxValidDate = new Date("01/01/2021");
  const [dateValidatior, setDateValidator] = useState(false);
  const [startDate, setStartDate] = useState(new Date("04/17/2017"));
  const [endDate, setEndDate] = useState(new Date("04/17/2017"));
  const [year, setYear] = useState("2017");
  const [month, setMoth] = useState("May");
  const years = ["2017", "2018", "2019", "2020", "2021"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year2, setYear2] = useState("2017");
  const [month2, setMoth2] = useState("May");

  //_____________________________________________________________________________________________________

  var dir = "http://127.0.0.1:8000/getRequest";

  const links = [
    "http://127.0.0.1:8000/getRequest/P1",
    "http://127.0.0.1:8000/getRequest/P2",
    "http://127.0.0.1:8000/getRequest/P1",
    "http://127.0.0.1:8000/getRequest/P1",
    "http://127.0.0.1:8000/getRequest/P1",
    "http://127.0.0.1:8000/getRequest/P1",
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
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  };

  const buttonFunt = (index, url) => {
    handleClick(url);
    setShowAnser(false);

    setDateValidator(false);
    handleIconClick(index);
  };

  const handleCalendarDate = () => {
    console.log(startDate > maxValidDate);
    console.log(startDate.getTime);
    if (
      startDate > minValidDate &&
      startDate < maxValidDate &&
      endDate > minValidDate &&
      endDate < maxValidDate
    ) {
      setShowAnser(true);
      handleClick(links[active]);
    } else {
      setDateValidator(false);
    }
  };
  const [showAnswer, setShowAnser] = useState(false);
  const [loadingChart, setLoadingChart] = useState(true);
  function miFuncion() {
    console.log("Han pasado 0.5 segundos.");
  }
  const handleAnswer = (data) => {
    if (data != null) {
      if (active === 0) {
        if (showAnswer) {
          return (
            <div className="answer1">
              {data}
              {data["State"]}
            </div>
          );
        }
      }
      if (active === 1) {
        if (showAnswer) {
          return (
            <div className="answer2">
              {data}
              {data["State"]}
            </div>
          );
        }
      }
      if (active === 2) {
        setData(data[{ yearChartSelector }]);
      }
    }
  };

  // Agrega un tiempo de espera de 0.5 segundos usando setTimeout()
  const handleChangeSelector = (e) => {
    setYearChartSelector(e.target.value);
  };
  const handleInputs = () => {
    if ((active === 0) | (active === 1)) {
      return (
        <div className="col">
          <div className="row-date-picker">
            <div className="col-date-picker">
              <h5>Fecha Inicial</h5>
              <DatePicker
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    >
                      {"<"}
                    </button>
                    <select
                      value={year}
                      onChange={({ target: { value } }) => {
                        changeYear(value);
                        setYear(value);
                      }}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={month}
                      onChange={({ target: { value } }) => {
                        changeMonth(months.indexOf(value));
                        setMoth(value);
                      }}
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    >
                      {">"}
                    </button>
                  </div>
                )}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="col-date-picker">
              <h5>Fecha Final</h5>
              <DatePicker
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    >
                      {"<"}
                    </button>
                    <select
                      value={year2}
                      onChange={({ target: { value } }) => {
                        changeYear(value);
                        setYear2(value);
                      }}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={month2}
                      onChange={({ target: { value } }) => {
                        changeMonth(months.indexOf(value));
                        setMoth2(value);
                      }}
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    >
                      {">"}
                    </button>
                  </div>
                )}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>
          <div className="centered">
            <div className="button" onClick={handleCalendarDate}>
              Buscar
            </div>
          </div>
          {dateValidatior && (
            <>
              <div className="Display">
                {active === 0 ? (
                  <>
                    El estado con mas Barcos Es {data} - {data.State} con un
                    numero de barcos {data.count}
                  </>
                ) : (
                  <>La Carga Mas transitada es la tipo 4</>
                )}
              </div>
            </>
          )}
        </div>
      );
    } else if (active === 2) {
      return (
        <div>
          <h2>Seleccione las fechas a desplegar</h2>
          <select value={"2017"} onChange={handleChangeSelector}>
            <option value={"2017"}>2017</option>
            <option value={"2019"}>2018</option>
            <option value={"2018"}>2018</option>
            <option value={"2019"}>2019</option>
            <option value={"2020"}>2020</option>
          </select>
          {loadingChart ? (
            <>Por Favor Espera mientas Carga</>
          ) : (
            <>
              <ColumnChart data={data}></ColumnChart>
              <p>
                Para responder esta pregunta se insta al usuario a ver el
                comportamiento mensual distribuido por años en las graficas
              </p>
            </>
          )}
        </div>
      );
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
          {handleInputs()}
          {handleAnswer(data)}
        </div>
      </div>
    </div>
  );
}

export default Taller1;
