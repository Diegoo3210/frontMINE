import { lightGreen } from "@mui/material/colors";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

export default function ColumnChart(props) {
  const options = {
    title: "Trafico de Enbarcaciones VS Mes para el año " + props.year,
    legend: { position: "none" },
    backgroundColor: lightGreen,
    isStacked: true,
    bar: { groupWidth: "90%" },
    chartArea: { width: "80%", height: "80%" },
    hAxis: {
      title: "Mes del Año",
    },
    vAxis: {
      title: "Numero de Barcos",

      viewWindowMode: "explicit",
      viewWindow: {
        max: 50,
        min: 0,
      },
    },
  };

  return <Chart chartType="ColumnChart" data={props.data} options={options} />;
}
