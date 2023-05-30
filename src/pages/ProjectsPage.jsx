import { Projects } from "../components"
import { projects } from "../utils/data"
const ProjectsPage = () => {
    return (
        <Projects projects={projects} title="all projects"/> 
    )
}

export default ProjectsPage