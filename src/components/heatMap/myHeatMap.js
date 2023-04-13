import HeatMap from "react-heatmap";
function MyHeatMap(props) {
  const data = props.data;
  return (
    <HeatMap
      data={data}
      xLabels={["A", "B", "C"]}
      yLabels={["X", "Y", "Z"]}
      cellStyle={(background, value, min, max, data, x, y) => ({
        background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
        fontSize: "11px",
      })}
    />
  );
}
export default MyHeatMap;
