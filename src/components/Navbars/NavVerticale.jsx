import Icon from "../Icon/Icon"
import yoga from "../../assets/icons/yoga.svg"
import swim from "../../assets/icons/swim.svg"
import bike from "../../assets/icons/bike.svg"
import bodybuilding from "../../assets/icons/bodybuilding.svg"
import "../../scss/index.scss"

export default function NavVerticale() {
  return (
    <nav className="nav-vertical">
      <ul className="nav-icons">
        <Icon iconValue={yoga} />
        <Icon iconValue={swim} />
        <Icon iconValue={bike} />
        <Icon iconValue={bodybuilding} />
      </ul>
      <p className="nav-text">Copyright, SportSee 2020</p>
    </nav>
  )
}
