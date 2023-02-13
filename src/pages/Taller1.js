import LeftSideBar from "../components/LeftSideBar";
import UpperBar from "../components/UpperBar";
import DashBoard from "../components/DashBoard";
import React, { useState } from "react";
import OpcionA from "../components/OpcionA";
import "./Taller1.css";

const Option2 = () => <div>Option 2 Screen</div>;
const Option3 = () => <div>Option 3 Screen</div>;
const options = [
  { value: "Option A", label: "Option ", component: OpcionA },
  { value: "Option B", label: "Option 2", component: Option2 },
  { value: "Option C", label: "Option 3", component: Option3 },
  { value: "Option D", label: "Option 2", component: Option2 },
  { value: "Option E", label: "Option 2", component: Option2 },
  { value: "Option F", label: "Option 2", component: Option2 },
  { value: "Option G", label: "Option 2", component: Option2 },

];

function Taller1() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(options.find((o) => o.value === event.target.value));
  };
  const SelectedScreen = selectedOption.component;

  return (
    
    <div className="row">
      <LeftSideBar />
      <div className="sizeBox"></div>

      <div className="col">
        <UpperBar />
        <DashBoard tittle="Taller1" />
        <div>
          <div>Selccione que requerimeinto desea correr</div>
          <select value={selectedOption.value} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <SelectedScreen />
        </div>
      </div>
    </div>
  );
}

export default Taller1;
