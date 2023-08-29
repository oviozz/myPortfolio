
import "./NavBarItem.css"
import { Link } from 'react-router-dom'


function NavBarItem({itemCount, labelData, toUrl}) {

    return (
        <Link className={"navbar--item"} to={toUrl}>
            <li>
                <span className={"navbar-heavy"}>{itemCount} </span>
                {labelData}
            </li>
        </Link>
    );
}


export default NavBarItem;
