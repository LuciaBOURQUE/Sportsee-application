import {
  getMainData,
  getUserActivityData,
  getUserSessionData,
  getUserPerformanceData,
} from "./Axios.jsx"

import userMainModel from "./models/UserProfil.jsx"
import userActivityModel from "./models/UserActivity.jsx"
import userSessionModel from "./models/UserSession.jsx"
import userPerformanceModel from "./models/UserPerformance.jsx"

export async function userMainData(id) {
  const data = await getMainData(id)
  const userData = new userMainModel(data)
  return userData
}

export async function userActivityData(id) {
  const data = await getUserActivityData(id)
  const userActivityData = new userActivityModel(data)
  return userActivityData
}

export async function userSessionData(id) {
  const data = await getUserSessionData(id)
  const userSessionData = new userSessionModel(data)
  return userSessionData
}

export async function userPerformanceData(id) {
  const data = await getUserPerformanceData(id)
  const userPerformanceData = new userPerformanceModel(data)
  return userPerformanceData
}
