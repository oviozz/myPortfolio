
import NavBarOverlay from "../../Components/MainNavBar/NavBarOverlay.jsx";
import MainBody from "../../Components/MainBodyCard/MainBody.jsx";
import FeatureProject from "../../Components/MainBodyCard/FeatureProject.jsx";

function HomePage(){
    return (
        <>
            <NavBarOverlay>
                <MainBody />
                <FeatureProject count={3} title={"Featured Projects"}/>
            </NavBarOverlay>
        </>
    )
}
export default HomePage;