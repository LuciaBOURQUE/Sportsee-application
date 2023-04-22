import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbars from "./components/Navbars/Navbars"
import Dashboard from "./pages/Dashboard/Dashboard"
import DataTest from "./pages/Dashboard/DataTest"

//import { USER_MAIN_DATA } from "./data/data"
//import { USER_ACTIVITY } from "./data/data"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <Navbars />
    <Routes>
      <Route path="/user/:id" element={<Dashboard />} />
      <Route path="/" element={<DataTest />} />
    </Routes>
  </BrowserRouter>
)

/*
      <Route
        path="/user/:id/activity"
        element={<Dashboard />}
        data={USER_ACTIVITY}
      />
*/
