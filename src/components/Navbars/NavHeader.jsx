import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "../../scss/index.scss"

export default function NavHeader() {
  return (
    <header className="navigation">
      <nav className="nav-horizontal">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Logo SportSee" />
        </Link>
        <ul className="nav-item">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link>Profil</Link>
          </li>
          <li>
            <Link>Réglages</Link>
          </li>
          <li>
            <Link>Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
