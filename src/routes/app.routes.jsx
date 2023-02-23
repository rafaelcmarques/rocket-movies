import { Routes, Route } from "react-router-dom"

import { CreateMovie } from "../pages/CreateMovie"
import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}
