import { lightGreen } from "@mui/material/colors";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

const options = {
  legend: { position: "none" },
  backgroundColor: lightGreen,
  isStacked: true,
  bar: { groupWidth: "90%" },
  chartArea: { width: "80%", height: "80%" },
  vAxis: {
    viewWindowMode: "explicit",
    viewWindow: {
      max: 500,
      min: -400,
    },
  },
};

export default function ColumnChart(props) {
  return <Chart chartType="ColumnChart" data={props.data} options={options} />;
}
