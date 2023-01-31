import "./UpperBar.css"
import uni from "../asset/logo-uniandes.png"

function UpperBar(){
    return(
    <div className="alig">
        <div className="group-Logo-Uniandes">
            <div className="sizeBox"></div>
            <div className="mine">MINE-4201</div>
            <img className="Logo-Uni" alt="logo" src={uni}/>
        </div>
    </div>);
}

export default UpperBar