
import NavBar from "./NavBar.jsx";

function NavBarOverlay(props){
    return (
        <div className={"main--container"}>
            <NavBar />
            <main>{props.children}</main>
        </div>
    )
}

export default NavBarOverlay;