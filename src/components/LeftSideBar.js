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
           <a className="link" href="/"> <div className="groupButton">
              <img className="icono" src={logo} alt="default"/>
              <div className="BtnTittle">Home</div>
            </div>
            </a>
            <a className="link" href="/Tarea1"> <div className="groupButton">
              <img className="icono" src={logo} alt="default"/>
              <div className="BtnTittle">Tarea1</div>
            </div>
            </a>
            <a className="link" href="/Taller1"> <div className="groupButton">
              <img className="icono" src={logo} alt="default"/>
              <div className="BtnTittle">Taller1</div>
            </div>
            </a>

        </div>
      </div>
    ); 
}

export default LeftSideBar;
