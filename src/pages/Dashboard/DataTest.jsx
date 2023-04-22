import Axios from "axios"
import { useEffect, useState } from "react"

export default function DataTest() {
  const [userMain, setUserMain] = useState([])

  const USER_MAIN_DATA = () => {
    useEffect(() => {
      Axios.get("http://localhost:5000/user/12")
        .then((res) => {
          //console.log(res.data)
          setUserMain(res.data)
        })
        .catch((err) => console.log(err))
    }, [])
  }

  USER_MAIN_DATA()

  return console.log("Hello")
}
