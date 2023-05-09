import React from "react"
import { Link } from "react-router-dom"
import "../../scss/index.scss"
import PropTypes from "prop-types"

export default function UserCard({ avatarProfil, nameProfil, ageProfil, id }) {
  return (
    <Link to={`/user/${id}`} className="cards-profil__profil">
      <img src={avatarProfil} alt={nameProfil} />
      <div className="name-profil-user">
        <span>{nameProfil}</span>
        <h3>{ageProfil} ans</h3>
      </div>
    </Link>
  )
}

UserCard.propTypes = {
  avatarProfil: PropTypes.string.isRequired,
  nameProfil: PropTypes.string.isRequired,
  ageProfil: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
