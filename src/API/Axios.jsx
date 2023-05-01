import axios from "axios"

export const getMainData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/user/${id}`)
    const mainData = response.data
    return mainData.data
  } catch (error) {
    console.log(error)
  }
}

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
