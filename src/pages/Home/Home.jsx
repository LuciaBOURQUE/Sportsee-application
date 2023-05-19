import React from "react"
import UserCard from "../../components/UserCard/UserCard"

import Man from "../../assets/icons/man.jpg"
import Woman from "../../assets/icons/woman.jpg"
import "../../scss/index.scss"

export default function Home() {
  return (
    <main className="connexion-profil">
      <h2 className="connexion-profil__title">Veuillez vous identifier</h2>
      <div className="cards-profil">
        <UserCard
          avatarProfil={Man}
          nameProfil="Karl Dovineau"
          ageProfil="31"
          id="12"
        />
        <UserCard
          avatarProfil={Woman}
          nameProfil="Cecilia Ratorez"
          ageProfil="34"
          id="18"
        />
        <UserCard
          avatarProfil={Woman}
          nameProfil="Mock user"
          ageProfil="27"
          id="mock"
        />
      </div>
    </main>
  )
}
