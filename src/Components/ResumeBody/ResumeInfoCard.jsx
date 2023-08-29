
import "./ResumeInfoCard.css"

function ResumeInfoCard(){

    return (
        <div className={"resume--card"}>
            <section id="contact">
                <p>Email: <a href="mailto:Prajwal.Sharma01@student.csulb.edu">Prajwal.Sharma01@student.csulb.edu</a></p>
                <p><a href="https://www.linkedin.com/in/prajwal-sharma-b99b31221/">LinkedIn Profile</a></p>
            </section>

            <section id="education">
                <h2>Education</h2>
                <p>California State University, Long Beach<br></br>
                    Expected Graduation: May 2025 </p>
                <p>Bachelor of Science, Computer Engineering | GPA: 3.67</p>
                <p>Relevant Courses: Advanced C++, Object Oriented Application Development, Data Structures, Database Fundamentals</p>
            </section>

            <section id="skills">
                <h2>Skills</h2>
                <p>Programming: Java, Python, C++, JavaScript, HTML, CSS, Tailwind CSS, React JS, Flask, GitHub, Firebase, Figma</p>
                <p>Languages: English (Fluent), Nepali (Native)</p>
            </section>
        </div>
    )

}

export default ResumeInfoCard;