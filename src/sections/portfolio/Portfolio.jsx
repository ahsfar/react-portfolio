import ProjectsCategories from "./ProjectsCategories"
import Projects from "./Projects"
import "./portfolio.css"
import data from "./data"
import {useState} from "react"


function Portfolio() {

  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category)
  const uniqueCategories = ["all", ... new Set(categories)];

  const filterProjectsHandler = (category) => {
    if (category === "all"){
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category === category)
    setProjects(filterProjects)
  }

  return (
    <section id="portfolio">
        <h2>Recent Projects</h2>
        <p>
          Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different catgories.
        </p>
        <div className="container portfolio__container">
          <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
          <Projects projects={projects}/>
        </div>
    </section>
  )
}

export default Portfolio