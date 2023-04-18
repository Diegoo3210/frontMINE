import { Chart } from "react-google-charts";
import React from "react";

function ComboChart(props) {
  const options = {
    title: "Distribucion de Tipo de Carga por dia de la semana",
    vAxis: { title: "Cantidad De CAraga" },
    hAxis: { title: "Dia de la Semana" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };
  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="400px"
      data={props.data}
      options={options}
    />
  );
}

export default ComboChart;
