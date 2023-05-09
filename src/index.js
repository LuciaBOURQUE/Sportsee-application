import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"
import Dashboard from "./pages/Dashboard/Dashboard"
import Error404 from "./pages/Error404/Error404"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<Dashboard />} />
      <Route path="/*" element={<Error404 />}></Route>
    </Routes>
  </BrowserRouter>
)
