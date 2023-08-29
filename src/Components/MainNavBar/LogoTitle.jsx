
import { FaRegFaceSmile } from "react-icons/fa6";
import "./LogoTitle.css"
function LogoTitle(){
    return (
        <div className={"logo--container"}>
            <img className={"logo--img"} src={"profilePic.jpg"} alt={""} />
            <h1 className={"logo--name"}>Prajwal S </h1>
        </div>
    )
}

export default LogoTitle;