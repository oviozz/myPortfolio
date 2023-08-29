
import "./MainBody.css"

function MainBody() {
    return (
        <div className="body--container">
            <div className="body--content">
                <h3 className="body--title">HELLO, MY NAME IS <a rel={"noreferrer"} href={"https://www.linkedin.com/in/prajwal-sharma-b99b31221/"} target={"_blank"} className="link--title">PRAJWAL</a></h3>
                <h1 className="body--header">I make ideas true<span className="header--dot">.</span></h1>
                <p className="body--description"> I&apos;m a <a className="link--description">CSULB</a> student passionate about software development and eager to become a professional developer.</p>
            </div>
        </div>
    )
}

export default MainBody;
