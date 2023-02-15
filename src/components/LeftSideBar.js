import "./LeftSideBar.css";
import logo from "../asset/overview.svg";

function LeftSideBar() {
  return (
    <div>
      <div className="rectangle-1">
        <div className="fixed">
        <nav>
          <ul>
            <li>
        <a id ="noLink" href="/">
          <div className="Logo">
          <div className="rectangle-logo"></div>
          <h1 className="tittle">TAREAS</h1>
        </div>
        </a>
        <div className="sizedBox"></div>
            </li>
            <li>
              <a className="link" href="/">
                <div className="groupButton">
                  <img className="icono" src={logo} alt="default" />
                  <div className="BtnTittle">Prueba</div>
                </div>
              </a>
            </li>
            <li>
              <a className="link" href="/Tarea1">
                <div className="groupButton">
                  <img className="icono" src={logo} alt="default" />
                  <div className="BtnTittle">Tarea1</div>
                </div>
              </a>
            </li>
            <li>
              <a className="link" href="/Taller1">
                <div className="groupButton">
                  <img className="icono" src={logo} alt="default" />
                  <div className="BtnTittle">Taller1</div>
                </div>
              </a>
            </li>
          </ul>
        </nav> </div>

        <div className="remaining">
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
