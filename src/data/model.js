import Axios from "axios"

const USER_MAIN_DATA = () => {
  Axios.get("http://localhost:5000/user/12")
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err))
}

const USER_ACTIVITY = () => {
  Axios.get("/user/12/activity")
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err))
}

USER_MAIN_DATA()
USER_ACTIVITY()
