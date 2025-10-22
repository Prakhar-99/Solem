import { Outlet } from "react-router-dom"
import DocsNav from "../components/DocsNav"


const DocsLayout = () => {
  
   






  return (
    <div className="overflow-x-hidden">
      <DocsNav />

    <main className="overflow-x-hidden">
  <Outlet />
  </main>
  </div>
  )
}

export default DocsLayout
