
import "./ResumeInfoCard.css"

function ResumeInfoCard(){

    return (
        <div className={"resume--card"}>
            <section id="contact">
                <p><b>Email:</b> <a href="mailto:Prajwal.Sharma01@student.csulb.edu">Prajwal.Sharma01@student.csulb.edu</a></p>
            </section>

            <section id="education">
                <h2>Education:</h2>
                <p>California State University, Long Beach<br></br>
                    <b>Expected Graduation:</b> May 2025 </p>
                <p>Bachelor of Science, Computer Engineering | GPA: 3.67</p>
                <p><b>Relevant Courses:</b> Advanced C++, Object Oriented Application Development, Data Structures, Database Fundamentals</p>
            </section>

            <section id="skills">
                <h2>Skills:</h2>
                <p><b>Programming:</b> Java, Python, C++, JavaScript, HTML, CSS, Tailwind CSS, React JS, Flask, GitHub, Firebase, Figma</p>
                <p><b>Languages:</b> English (Fluent), Nepali (Native), Hindi (Fluent)</p>
            </section>
        </div>
    )

}

export default ResumeInfoCard;