import { Link } from "react-router-dom"
import Icon from "../Icon/Icon"
import yoga from "../../assets/icons/yoga.svg"
import swim from "../../assets/icons/swim.svg"
import bike from "../../assets/icons/bike.svg"
import bodybuilding from "../../assets/icons/bodybuilding.svg"
import "../../scss/index.scss"

export default function NavVerticale() {
  return (
    <nav className="nav-vertical">
      <div className="nav-icons">
        <Link>
          <Icon iconValue={yoga} />
        </Link>
        <Link>
          <Icon iconValue={swim} />
        </Link>
        <Link>
          <Icon iconValue={bike} />
        </Link>
        <Link>
          <Icon iconValue={bodybuilding} />
        </Link>
      </div>
      <p className="nav-text">Copyright, SportSee 2020</p>
    </nav>
  )
}
