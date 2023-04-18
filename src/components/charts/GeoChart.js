import { Chart } from "react-google-charts";
import React from "react";

function GeoChart(props) {
  const options = {
    region: "US",
    resolution: "provinces",
    colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#white",
    defaultColor: "#f5f5f5",
  };
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={props.data}
      options={options}
    />
  );
}

export default GeoChart;
