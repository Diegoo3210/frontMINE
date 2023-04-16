import "./UpperBar.css";
import uni from "../asset/logo-uniandes.png";
import React from "react";

function UpperBar() {
  return (
    <div className="alig">
      <div className="group-Logo-Uniandes">
        <div className="sizeBox"></div>
        <div className="mine">MINE-4201</div>
        <a className="link" href="https://uniandes.edu.co/">
          <img className="Logo-Uni" alt="logo" src={uni} />
        </a>
      </div>
    </div>
  );
}

export default UpperBar;
