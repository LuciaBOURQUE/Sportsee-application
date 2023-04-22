import Icon from "../Icon/Icon"
import "../../scss/index.scss"
// Créer ici le PropTypes des paramètres

export default function UserData({ dataValue, dataTitle, iconValue }) {
  return (
    <div className="user-data">
      <div className="data-icon">
        <Icon iconValue={iconValue}></Icon>
      </div>
      <div className="data-infos">
        <h2>{dataValue}</h2>
        <span>{dataTitle}</span>
      </div>
    </div>
  )
}
