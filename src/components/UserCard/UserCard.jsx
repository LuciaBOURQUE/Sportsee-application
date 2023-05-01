import React from "react"
import { Link } from "react-router-dom"
import "../../scss/index.scss"
import PropTypes from "prop-types" // A FAIRE !

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
  data: PropTypes.shape({}),
}
