
import './App.css'
import HomePage from "./Pages/Home/HomePage.jsx";
import {Route, Routes} from 'react-router-dom'
import ProjectsPage from "./Pages/Projects/ProjectsPage.jsx";
import ResumePage from "./Pages/Resume/ResumePage.jsx";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/projects"} element={<ProjectsPage />} />
            <Route path={"/resume"} element={<ResumePage />} />

        </Routes>
    )
}


export default App
