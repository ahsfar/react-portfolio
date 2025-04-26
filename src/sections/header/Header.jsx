import { useEffect } from "react"
import HeaderImage from "../../assets/header.jpg"
import data from "./data"
import AOS from "aos"
import "aos/dist/aos.css"
import "./header.css"
// ProjectCarousel component is imported but currently not in use
// Can be uncommented and used in the future for displaying featured projects
// import ProjectCarousel from "../../components/ProjectCarousel"


function Header() {

  useEffect(() =>{
    AOS.init({duration:2000})
  },[])

  return (
    <header id="header">
        <div className="container header__container">
          <div className="header__profile" data-aos="fade-in">
            <img src={HeaderImage} alt="Header Portrait" />
          </div>
          <h3 data-aos="fade-up">Ahsan Farooq</h3>
          <p data-aos="fade-up">
          Embark on a transformative journey to craft your ideal website or web app with the expertise of an aspiring DevOps Engineer – that's me! Together, we'll infuse a human touch into every aspect while ensuring modernity, mobile responsiveness, and outstanding performance. Don't hesitate – share the intricate details of your project, and let's commence this exhilarating venture towards a remarkable online presence!          </p>
          <div className="header__cta" data-aos="fade-up">
            <a href="#contact" className="btn primary">Let's talk</a>
            <a href="#portfolio" className="btn light">My Work</a>
          </div>
          <div className="header__socials">
            {
              data.map(item =><a key={item.id} href={item.link} target="_blank"
              rel="noopener noreferrer">{item.icon}</a>)
            }
          </div>
        </div>
        {/* ProjectCarousel component is commented out for future use
            Uncomment the line below to display featured projects in the header
            <ProjectCarousel />
        */}
    </header>
  )
}

export default Header
