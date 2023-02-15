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
  var dir = "http://127.0.0.1:8000/getRequest";

  const icons = [
    "http://127.0.0.1:8000/getRequest/A",
    "http://127.0.0.1:8000/getRequest/B",

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
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  const buttonFunt = (index, url) => {
    handleClick(url);
    handleIconClick(index);
  }
  return (
    <div className="row">
      <LeftSideBar />
      <div className="sizeBox"></div>

      <div className="col">
        <UpperBar />
        <DashBoard tittle="Taller1" />

        <h4>Por Favor Seleccione Una opcion</h4>

        <div className="icon-bar">
          {icons.map((icon, index) => (
            <span
              className={active === index ? "active" : ""}
              onClick={() => buttonFunt(index, icon)}
            >
              <div class="fa fa-home">{icon.substring(icon.lastIndexOf("/")+1)}</div>
            </span>
          ))}
        </div>
        <div className="display">{JSON.stringify(data)} </div>
      </div>
    </div>
  );
}

export default Taller1;
