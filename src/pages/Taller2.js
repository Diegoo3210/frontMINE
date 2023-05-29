import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import UpperBar from "../components/UpperBar";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker } from "antd";
import "./Taller2.css";
import dayjs, { Dayjs } from "dayjs";

function Taller2() {
  const barHeaders = ["C1", "C2", "C3"];
  const links = [
    "http://localhost:3001/patient",
    "https://api.github.com/users/hadley/orgs",
    "https://api.github.com/users/hadley/orgs",
  ];
  const usersOptions = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];

  const [curruntData, setCurrentData] = useState([]);
  const [active, setActive] = useState(0);
  const [valueUser, setValueUser] = React.useState("BuscarUsuario");
  const [inputValue, setInputValue] = React.useState("");

  const { RangePicker } = DatePicker;

  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCurrentData(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  };

  const buttonFunt = (index, url) => {
    console.log(url);
    fetchData(url);

    setActive(index);
    setDates([dayjs("2023-05-17"), dayjs("2023-04-21")]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [value, setValue] = useState([
    dayjs("2023-05-17"),
    dayjs("2023-04-21"),
  ]);
  const [dates, setDates] = useState(null);

  const onOpenChange = (open) => {
    console.log(dates);
  };
  const onDateRateChange = (val) => {
    setValue(val);
  };
  const rangePresets = [
    { label: "Ultimos 7 Días", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "Ultimos 14 Días", value: [dayjs().add(-14, "d"), dayjs()] },
    { label: "Ultimos 30 Días", value: [dayjs().add(-30, "d"), dayjs()] },
    { label: "Ultimos 90 Días", value: [dayjs().add(-90, "d"), dayjs()] },
  ];

  const disabledDate = (current) => {
    return current && current > dayjs().endOf("day");
  };

  const handleInputs = () => {
    if (active === 0) {
      return (
        <>
          <h4>Consulta 1</h4>
          <p>
            Dado un rango de tiempo mostrar la cantidad de Tweets hechos por
            cada uno de los usuarios.
          </p>
          <div>
            <RangePicker
              value={dates || value}
              onCalendarChange={(val) => setDates(val)}
              onChange={(val) => onDateRateChange(val)}
              onOpenChange={onOpenChange}
              presets={rangePresets}
              size="small"
              disabledDate={disabledDate}
              format={"YYYY/MM/DD"}
              defaultPickerValue={[dayjs().add(-30, "d"), dayjs()]}
            />
          </div>
        </>
      );
    }
    if (active === 1) {
      return (
        <>
          <h4>Consulta 2</h4>
          <p>
            Dado un rango de tiempo y un usuario mostrar la cantidad de tweets
            en los que se le relaciona.
          </p>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={usersOptions.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
          <div>
            <RangePicker
              value={dates || value}
              onCalendarChange={(val) => setDates(val)}
              onChange={(val) => onDateRateChange(val)}
              onOpenChange={onOpenChange}
              presets={rangePresets}
              size="small"
              disabledDate={disabledDate}
              format={"YYYY/MM/DD"}
              defaultPickerValue={[dayjs().add(-30, "d"), dayjs()]}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <h4>Consulta 3</h4>
          <p>Mostrar la cantidad de tweets hechos por cada día dado un mes.</p>
          <DatePicker picker="month" />
        </>
      );
    }
  };
  return (
    <>
      <div className="row">
        <LeftSideBar />
        <div className="col">
          <UpperBar />
          <h4>Por Favor Seleccione Una opcion</h4>

          <div className="icon-bar-wrapper">
            {" "}
            <div className="icon-bar">
              {links.map((url, index) => (
                <span
                  className={active === index ? "active" : ""}
                  onClick={() => buttonFunt(index, url)}
                >
                  <div class="btn-tittle">{barHeaders[index]}</div>
                </span>
              ))}
            </div>
          </div>
          <div>
            {handleInputs()}
            {curruntData.map((user, index) => (
              <h1 key={index}>{user.id_number}</h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Taller2;
