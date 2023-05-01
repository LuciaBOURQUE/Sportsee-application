import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {
  userMainData,
  userActivityData,
  userSessionData,
  userPerformanceData,
} from "../../API/Services"

import NavVerticale from "../../components/Navbars/NavVerticale"
import User from "../../components/User/User"
import UserData from "../../components/UserData/UserData"
import DataBarChart from "../../components/BarChart/DataBarChart.jsx"
import DataLineChart from "../../components/LineChart/DataLineChart.jsx"
import DataRadarChart from "../../components/RadarChart/DataRadarChart.jsx"
import DataRadialChart from "../../components/RadialChart/DataRadialChart.jsx"

import fire from "../../assets/icons/fire.svg"
import chicken from "../../assets/icons/chicken.svg"
import apple from "../../assets/icons/apple.svg"
import cheeseburger from "../../assets/icons/cheeseburger.svg"
import "../../scss/index.scss"

export default function Dashboard() {
  const { id } = useParams()
  const [datas, setDatas] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const userDatas = await userMainData(id)
        const userActivities = await userActivityData(id)
        const userSessions = await userSessionData(id)
        const userPerformances = await userPerformanceData(id)
        setDatas({ userDatas, userActivities, userSessions, userPerformances })

        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id])

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <main className="dashboard">
            <NavVerticale />
            <div className="dashboard__profil">
              <header className="user">
                <User nameValue={datas.userDatas.firstName} />
              </header>
              <div className="dashboard__graphics">
                <div className="dashboard__recharts">
                  <DataBarChart barValue={datas.userActivities.sessions} />
                  <div className="dashboard__recharts__blocs">
                    <DataLineChart barValue={datas.userSessions.sessions} />
                    <DataRadarChart
                      radarValue={datas.userPerformances.kind}
                      radarDataValue={datas.userPerformances.data}
                    />
                    <DataRadialChart
                      radialDataValue={datas.userDatas.todayScore}
                    />
                  </div>
                </div>
                <section className="section-userdata">
                  <UserData
                    iconValue={fire}
                    dataValue={datas.userDatas.keyData.calorieCount}
                    dataTitle={"Calories"}
                    unit={"kCal"}
                  />
                  <UserData
                    iconValue={chicken}
                    dataValue={datas.userDatas.keyData.proteinCount}
                    dataTitle={"Proteines"}
                    unit={"g"}
                  />
                  <UserData
                    iconValue={apple}
                    dataValue={datas.userDatas.keyData.carbohydrateCount}
                    dataTitle={"Glucides"}
                    unit={"g"}
                  />
                  <UserData
                    iconValue={cheeseburger}
                    dataValue={datas.userDatas.keyData.lipidCount}
                    dataTitle={"Lipides"}
                    unit={"g"}
                  />
                </section>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  )
}

/*
        if (!userDatas.id === id) {
          return navigate("/Error")
        }
        //console.log(userDatas.id)
        //console.log(id)
*/
