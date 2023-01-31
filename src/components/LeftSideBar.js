import "./LeftSideBar.css";
import logo from "../asset/overview.svg"

function LeftSideBar(){
    return (
      <div>
        <div className="rectangle-1">
            <div className="Logo">
                <div className="rectangle-logo"></div>
                <h1 className="tittle">TAREAS</h1>
            </div>
            <div className="groupButton">
              <img className="icono" src={logo} alt="default"/>
              <div className="BtnTittle">Tarea1</div>
            </div>
            <div className="groupButton">
              <img className="icono" src={logo} alt="default"/>
              <div className="BtnTittle">Taller1</div>
            </div>
            <div className="groupButton">
              <img className="icono" src={logo} alt="default"/>
              <div className="BtnTittle">Taller2</div>
            </div>
        </div>
      </div>
    ); 
}

export default LeftSideBar;
