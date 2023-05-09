import axios from "axios"

/**
 * Get the main information of the user (name, personal informations)
 * @param {number} id allows to retrieve the data related to the id
 * @returns {Promise} returns the object with the information
 */
export const getMainData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/user/${id}`)
    const mainData = response.data
    return mainData.data
  } catch (error) {
    console.log(error)
  }
}

/* Get the data related to the activity
of the user's week (calories, kilograms and days) */
export const getUserActivityData = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/user/${userId}/activity`
    )
    const userActivityData = response.data
    return userActivityData.data
  } catch (error) {
    console.log(error)
  }
}

/* Get the data related to session times (minutes) per day */
export const getUserSessionData = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/user/${userId}/average-sessions`
    )
    const userSessionData = response.data
    return userSessionData.data
  } catch (error) {
    console.log(error)
  }
}

/* Get the data related to user performance */
export const getUserPerformanceData = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/user/${userId}/performance`
    )
    const userPerformanceData = response.data
    return userPerformanceData.data
  } catch (error) {
    console.log(error)
  }
}
