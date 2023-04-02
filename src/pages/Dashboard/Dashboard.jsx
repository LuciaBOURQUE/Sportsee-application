import { USER_MAIN_DATA } from "../../data/data.js"
import { USER_ACTIVITY } from "../../data/data.js"
import "../../scss/index.scss"

import User from "../../components/User/User.jsx"
import UserData from "../../components/UserData/UserData.jsx"
import DataBarChart from "../../components/BarChart/DataBarChart.jsx"

import fire from "../../assets/icons/fire.svg"
import chicken from "../../assets/icons/chicken.svg"
import apple from "../../assets/icons/apple.svg"
import cheeseburger from "../../assets/icons/cheeseburger.svg"

export default function Dashboard() {
  return (
    <main className="dashboard">
      {USER_MAIN_DATA.map((user) => (
        <div key={user.id} className="dashboard__user">
          <header className="user">
            <User nameValue={user.userInfos.firstName} />
          </header>
          <section className="section-userdata">
            <UserData
              iconValue={fire}
              dataValue={user.keyData.calorieCount}
              dataTitle={"Calories"}
            />
            <UserData
              iconValue={chicken}
              dataValue={user.keyData.proteinCount}
              dataTitle={"Proteines"}
            />
            <UserData
              iconValue={apple}
              dataValue={user.keyData.carbohydrateCount}
              dataTitle={"Glucides"}
            />
            <UserData
              iconValue={cheeseburger}
              dataValue={user.keyData.lipidCount}
              dataTitle={"Lipides"}
            />
          </section>
        </div>
      ))}
      {USER_ACTIVITY.map((activity) => (
        <section key={activity.userId}>
          <DataBarChart barValue={activity.sessions} />
        </section>
      ))}
    </main>
  )
}
