import Icon from "../Icon/Icon"
import "../../scss/index.scss"
// Créer ici le PropTypes des paramètres

export default function UserData({ dataValue, dataTitle, iconValue, unit }) {
  return (
    <div className="user-data">
      <div className={dataTitle}>
        <Icon iconValue={iconValue}></Icon>
      </div>
      <div className="data-infos">
        <h2>
          {dataValue}
          {unit}
        </h2>
        <span>{dataTitle}</span>
      </div>
    </div>
  )
}
