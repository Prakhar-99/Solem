import {NavLink} from "react-router-dom"

const GettingStarted = () => {
  return (
    <section className="w-full flex mb-4 ">
      <div className=" max-w-7xl px-6 lg:px-12 mt-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-medium  "> 1. introduction</h1>
          <p className="  mt-4 text-md text-secondarylite">
            Switching to solar energy is one of the smartest investments you can
            make.<br/> This guide helps you understand how to select the best Solem
            Solar  panel system for your home or business, calculate your
            potential savings, and prepare your site for installation.
          </p>
        </div>

        <div className="w-full mt-12 ">
          <div className="my-4">
            <h3 className="text-2xl md:text-3xl font-medium ">
              2. Choosing the Right Solar Panel
            </h3>
            <p className="text-sm text-secondarylite mt-4">
              Solem Solar offers multiple product lines tailored for different
              applications
            </p>
          </div>
          <table className="min-w-full table-auto text-center  border-x-2 border-b-2 border-complement   ">
            <thead className=" border-3 border-complement text-lg ">
              <tr>
                <th className="py-4 ">power output</th>
                <th className="py-4">ideal for</th>
              </tr>
            </thead>
            <tbody className="text-sm align-middle border-complement">
              <tr className="">
                <td className="px-4 py-4">340w</td>
                <td className="px-4 py-4">Small homes, minimal shading</td>
              </tr>

              <tr className="">
                <td className="px-4 py-4">340w</td>
                <td className="px-4 py-4">Small homes, minimal shading</td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-4 ">340w</td>
                <td className="px-4 py-4">Small homes, minimal shading</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <h1 className="text-2xl md:text-3xl font-medium">3. site assesment</h1>
          <h2 className="text-lg mt-4">
            Before installation, perform a quick evaluation:
          </h2>
          <div className="mt-4 px-4 mb-8">
            <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-y-4 text-element text-md">
              <li className="pt-4">
                Orientation: South-facing roofs yield maximum output.{" "}
              </li>

              <li className="pt-4">
                Tilt Angle: Ideally equal to your latitude (e.g., 25–30° in
                India).{" "}
              </li>

              <li className="pt-4">
                Shading: Avoid trees, chimneys, or antennas casting shade.{" "}
              </li>

              <li className="pt-4">
                Roof Condition: Must withstand panel and mounting weight.{" "}
              </li>

              <li className="pt-4">
                Space: Each panel requires ~1.8 m² of usable area{" "}
              </li>
            </ul>
          </div>
          <p className="mt-4 text-md text-secondary">
            If unsure, Solem’s certified installers can perform a free site
            audit
          </p>
        </div>

        <div className="mt-12">
          <h1 className="text-2xl md:text-3xl font-medium">
            
            4. Estimating Power and Savings{" "}
          </h1>

          <p className="mt-4 text-md">
            Use this simple method to estimate energy production:{" "}
          </p>

          <h2 className="mt-4 text-lg font-medium  underline text-complement">
            Daily Energy (kWh) = System Size (kW) × 4.5 (average sun hours){" "}
          </h2>
          <p className="mt-4 text-md text-secondarylite">
            <span className="text-lg text-secondary font-medium">Example: </span>
            <br />A 3 kW system produces about 13.5 kWh/day, saving roughly
            ₹2,000–₹2,500/month depending on your local electricity rate.
          </p>
          <p className="mt-4 text-md text-secondarylite">
            Solem Solar also provides an online Savings Calculator to estimate
            ROI, payback period, and CO₂ offset
          </p>
        </div>


        <div className="mt-12">
          <h1 className="text-2xl md:text-3xl font-medium">
            
            5. ordering your system
          </h1>

          <h2 className="mt-4 text-lg font-medium  underline text-complement">
            you can order directly via :
          </h2>
           <div className=" px-4 mb-8">
            <ul className="list-disc  text-secondary text-md">
              <li className="pt-4">
               Official website: <NavLink to={"/products"} className="underline text-lg px-2">solem/product</NavLink>
              </li>

              <li className="pt-4">
               Authorized dealers (see network map)
              </li>

              <li className="pt-4">
                Corporate partnerships for bulk installations
              </li>
            </ul>
          </div>
        </div>
<div className="mt-12">
<h1 className="text-2xl md:text-3xl font-medium"> 6. Pre-Installation Checklis</h1>

<div className="px-4 mb-8">
<ul className="list-disc marker:text-complement text-md text-secondary ">
       <li className="pt-4"> Roof inspected and in good condition</li>  

<li className="pt-4"> No major shading</li>

 <li className="pt-4">Adequate access to electrical panel</li>

 <li className="pt-4">Local permits secured (if required)</li>

 <li className="pt-4">Installation date confirmed</li>
 </ul>
 </div>
   <div className="">
   <NavLink to={"/document/installation"} className="  px-4 bg-complement py-3 text-md rounded-lg text-primary"> installation guide</NavLink>
   </div>
 </div>
      </div>
    </section>
  );
};

export default GettingStarted;
