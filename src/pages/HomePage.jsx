import { Link } from "react-router-dom";
import { projects as data} from "../utils/data";
import { Projects } from "../components";
const HomePage = () => {
  const projects = data.slice(0, 3)
  return (
    <main>
      <section className="hero">
        <div className="hero-center">
          <h1 className="hero-title">hi, i'm <span>Brian Gakure</span></h1>
          <p className="hero-text">
          Passionate self-taught JavaScript developer adept at front-end using Reactjs. Eager to contribute to impactful projects and enhance professional skills. Open to opportunities from potential employers. Let's connect!
          </p>
          <Link className="hero-btn" to="/projects">explore projects</Link>
        </div>
      </section>
      <Projects projects={projects} title="featured projects"/>
    </main>
  );
};
export default HomePage