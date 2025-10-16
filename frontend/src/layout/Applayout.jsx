import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";
import ProductCard from "../components/ProductCard";

export default function Applayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Normal pages render here */}
      </main>
      <Fotter />
    </div>
  );
}
