
import { FaRegCopyright, FaGithub, FaLinkedin } from "react-icons/fa6";
import "./Footer.css"
function Footer(){

    return (
        <div className={"footer--container"}>
            <ul className={"footer--items"}>
                <li className={"footer--item"}>
                    <FaRegCopyright className={"footer--icon"}/>
                    <p className={"ft--item"}>2023-2024</p>
                </li>

                <li className={"footer--item"}>
                    <FaGithub className={"footer--icon"}/>
                    <p className={"ft--item"}>Github</p>
                </li>

                <li className={"footer--item"}>
                    <FaLinkedin className={"footer--icon"}/>
                    <p className={"ft--item"}>Linkedin</p>
                </li>
            </ul>

        </div>
    )
}


export default Footer;