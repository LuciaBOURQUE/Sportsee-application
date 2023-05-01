import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavHeader from "./components/Navbars/NavHeader"
import Home from "./pages/Home/Home"
import Dashboard from "./pages/Dashboard/Dashboard"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <NavHeader />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
