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

/**
 * Create the table of object which contains all the information
 * about the user that I will be able to use on Dashboard file
 * @param {number} id
 * @returns {Object}
 */
export async function userMainData(id) {
  const data = await getMainData(id)
  const userData = new userMainModel(data)
  return userData
}

/* Create the table of object which contains all the information
  about the activity of the user's week (calories, kilograms and days) */
export async function userActivityData(id) {
  const data = await getUserActivityData(id)
  const userActivityData = new userActivityModel(data)
  return userActivityData
}

/* Create the table of object which contains all the information
  about the session times (minutes) per day of the user */
export async function userSessionData(id) {
  const data = await getUserSessionData(id)
  const userSessionData = new userSessionModel(data)
  return userSessionData
}

/* Create the table of object which contains all the information
  about the user performance */
export async function userPerformanceData(id) {
  const data = await getUserPerformanceData(id)
  const userPerformanceData = new userPerformanceModel(data)
  return userPerformanceData
}
