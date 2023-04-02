import "../../scss/index.scss"
// Créer ici le PropTypes

export default function User({ nameValue }) {
  return (
    <div className="user__name">
      <h1>Bonjour {nameValue}</h1>
      <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
