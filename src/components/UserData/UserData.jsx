import Icon from "../Icon/Icon"
import "../../scss/index.scss"
import PropTypes from "prop-types"

export default function UserData({ dataValue, dataTitle, iconValue, unit }) {
  /* Formats a number with commas when that number is greater than 4 digits */
  function separator(dataValue) {
    var str = dataValue.toString().split(".")
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return str.join(".")
  }

  return (
    <div className="user-data">
      <div className={dataTitle}>
        <Icon iconValue={iconValue}></Icon>
      </div>
      <div className="data-infos">
        <h2>
          {separator(dataValue)}
          {unit}
        </h2>
        <span>{dataTitle}</span>
      </div>
    </div>
  )
}

UserData.propTypes = {
  dataValue: PropTypes.number.isRequired,
  dataTitle: PropTypes.string.isRequired,
  iconValue: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
}
