
import ResumeInfoCard from "./ResumeInfoCard.jsx";
import "./Resume.css"
function Resume(){

    return (
        <div className={"resume--container"}>
            <h1 className={"feature--title"}>Resume<span className={"feature--dot"}>.</span></h1>
            <ResumeInfoCard />
        </div>
    )

}

export default Resume;