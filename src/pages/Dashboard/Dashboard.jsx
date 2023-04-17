import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/data.js"
import "../../scss/index.scss"

import User from "../../components/User/User.jsx"
import UserData from "../../components/UserData/UserData.jsx"
import DataBarChart from "../../components/BarChart/DataBarChart.jsx"
import DataLineChart from "../../components/LineChart/DataLineChart.jsx"
import DataRadarChart from "../../components/RadarChart/DataRadarChart.jsx"
import DataRadialChart from "../../components/RadialChart/DataRadialChart.jsx"

import fire from "../../assets/icons/fire.svg"
import chicken from "../../assets/icons/chicken.svg"
import apple from "../../assets/icons/apple.svg"
import cheeseburger from "../../assets/icons/cheeseburger.svg"

export default function Dashboard() {
  return (
    <main className="dashboard">
      {USER_MAIN_DATA.map((user) => (
        <header key={user.id} className="user">
          <User nameValue={user.userInfos.firstName} />
        </header>
      ))}
      <div className="dashboard__graphics">
        <div className="dashboard__recharts">
          {USER_ACTIVITY.map((activity) => (
            <section key={activity.userId} className="barchart">
              <DataBarChart barValue={activity.sessions} />
            </section>
          ))}
          <div className="dashboard__recharts__blocs">
            {USER_AVERAGE_SESSIONS.map((sessions) => (
              <section key={sessions.userId} className="linechart">
                <DataLineChart barValue={sessions.sessions} />
              </section>
            ))}
            {USER_PERFORMANCE.map((performance) => (
              <section key={performance.userId} className="radarchart">
                <DataRadarChart
                  radarValue={performance.kind}
                  radarDataValue={performance.data}
                />
              </section>
            ))}
            {USER_MAIN_DATA.map((score) => (
              <section key={score.id} className="radialchart">
                <DataRadialChart radialDataValue={score.todayScore} />
              </section>
            ))}
          </div>
        </div>
        {USER_MAIN_DATA.map((infos) => (
          <section key={infos.id} className="section-userdata">
            <UserData
              iconValue={fire}
              dataValue={infos.keyData.calorieCount}
              dataTitle={"Calories"}
            />
            <UserData
              iconValue={chicken}
              dataValue={infos.keyData.proteinCount}
              dataTitle={"Proteines"}
            />
            <UserData
              iconValue={apple}
              dataValue={infos.keyData.carbohydrateCount}
              dataTitle={"Glucides"}
            />
            <UserData
              iconValue={cheeseburger}
              dataValue={infos.keyData.lipidCount}
              dataTitle={"Lipides"}
            />
          </section>
        ))}
      </div>
    </main>
  )
}
