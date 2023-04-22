import "../../scss/index.scss"
import PropTypes from "prop-types"

export default function Icon({ iconValue }) {
  return (
    <div className="bloc-icon">
      <img src={iconValue} alt="icon app" className="name-icon" />
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.symbol,
}
