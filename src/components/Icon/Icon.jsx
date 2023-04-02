import "../../scss/index.scss"
// Créer ici le PropTypes

export default function Icon({ iconValue }) {
  return (
    <div className="bloc-icon">
      <img src={iconValue} alt="icon app" className="name-icon" />
    </div>
  )
}
