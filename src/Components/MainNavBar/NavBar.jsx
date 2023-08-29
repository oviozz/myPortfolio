
import LogoTitle from "./LogoTitle.jsx";
import NavBarItem from "./NavBarItem.jsx";
import "./NavBar.css"

function NavBar(){

    return (
        <div className={"navbar--container"}>
            <LogoTitle />

            <ul className={"navbar--list"}>
                <NavBarItem itemCount={"01 "} labelData={"home"} toUrl={"/"} />
                <NavBarItem itemCount={"02 "} labelData={"projects"} toUrl={"/projects"} />
                <NavBarItem itemCount={"03 "} labelData={"resume"} toUrl={"/resume"}/>
            </ul>
        </div>
    )

}


export default NavBar;