
import ProjectItems from "./ProjectItems.jsx";
import "./FeatureProject.css"

function FeatureProject({ title, count }){

    return (
        <div className={"feature--container"}>
            <div className={"feature--content"}>
                <h1 className={"feature--title"}>{title}<span className={"feature--dot"}>.</span></h1>
                <ProjectItems limit={count}/>
            </div>
        </div>
    )

}

export default FeatureProject;