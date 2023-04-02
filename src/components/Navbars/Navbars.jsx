import Icon from "../Icon/Icon"
import logo from "../../assets/logo.png"
import yoga from "../../assets/icons/yoga.svg"
import swim from "../../assets/icons/swim.svg"
import bike from "../../assets/icons/bike.svg"
import bodybuilding from "../../assets/icons/bodybuilding.svg"
import "../../scss/index.scss"

export default function Navbars() {
  return (
    <header className="navigation">
      <div className="horizontal">
        <nav className="nav-horizontal">
          <img src={logo} className="nav-logo" alt="Logo SportSee" />
          <ul className="nav-item">
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglages</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </div>

      <div className="vertical">
        <nav className="nav-vertical">
          <ul className="nav-icons">
            <Icon iconValue={yoga} />
            <Icon iconValue={swim} />
            <Icon iconValue={bike} />
            <Icon iconValue={bodybuilding} />
          </ul>
          <p className="nav-text">Copyright, SportSee 2020</p>
        </nav>
      </div>
    </header>
  )
}
