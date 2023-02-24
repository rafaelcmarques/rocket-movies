import { HashRouter } from "react-router-dom"

import { AppRoutes } from "./app.routes"

export function Routes() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}
