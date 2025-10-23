import { Outlet } from "react-router-dom"
import DocsNav from "../components/other/DocsNav"


const DocsLayout = () => {
  
   






  return (
    <div className=" mb-8 lg:mt-16">
      <DocsNav />

    <main className="block">
  <Outlet />
  </main>
  </div>
  )
}

export default DocsLayout
