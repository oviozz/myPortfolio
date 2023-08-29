import NavBarOverlay from "../../Components/MainNavBar/NavBarOverlay.jsx";
import FeatureProject from "../../Components/MainBodyCard/FeatureProject.jsx";

function ProjectsPage(){
    return (
        <>
            <NavBarOverlay>
                <FeatureProject count={100} title={"Projects"}/>
            </NavBarOverlay>
        </>
    )
}

export default ProjectsPage;