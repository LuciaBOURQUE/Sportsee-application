import "../../scss/index.scss"
import PropTypes from "prop-types"

export default function User({ nameValue }) {
  return (
    <div className="user__name">
      <h1>
        Bonjour {""}
        <span>{nameValue}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

User.propTypes = {
  nameValue: PropTypes.string,
}
