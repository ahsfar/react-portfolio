
import Logo from "../../assets/logo.png";
import data from "./data";
import { AiOutlineBgColors} from "react-icons/ai"
import { useModalContext } from "../../context/modal-context";
import "./navbar.css"

function Navbar() {
  const {showModalHandler} = useModalContext()

  return (
    <nav>
    {/* nav__container -> BEM - block element modifier class */}
        <div className="container nav__container">
          <a href="index.html" className="nav__logo">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className="nav__menu" >
            {
              data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
            }
          </ul>
          <button id="theme__icon" onClick={showModalHandler}><AiOutlineBgColors/></button>
        </div>
    </nav>
  )
}

export default Navbar
