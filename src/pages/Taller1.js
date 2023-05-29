import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import UpperBar from "../components/UpperBar";
export default function Taller1() {
  return (
    <>
      <LeftSideBar />
      <div className="col">
        <UpperBar />
        <h1>Estamos en Mantenimiento</h1>
      </div>
    </>
  );
}
