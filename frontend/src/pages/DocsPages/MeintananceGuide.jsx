import React from "react";

const MeintananceGuide = () => {
  return (
    <section className="w-full flex mb-4">
      <div className="  max-w-7xl px-6 lg:px-12 mt-4">
        <div>
          <h1 className="text-3xl font-bold text-complement mb-6">
            MaintenanceGuide — Caring for Your Solem Solar System
          </h1>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-complement mb-3">
            1. Routine care
          </h1>
          <p className="text-secondary mt-4">
            Solem panels are built to last 25+ years with minimal maintenance.{" "}
            <br />
            Still, routine cleaning and inspection keep them performing their
            best
          </p>

          <div className=" mt-4">
            <table className="min-w-full border-complement border-2  text-center">
              <thead className="text-lg border-complement border-b px-4">
                <tr>
                  <th className="py-4 px-4">Frequency</th>
                  <th className="py-4 ">Task</th>
                  <th className="py-4 ">Purpose</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-complement ">
                  <td className="py-4 px-4">Monthly</td>
                  <td className="py-4 px-4">
                    Visual check for dust, debris, bird droppings
                  </td>
                  <td className="py-4 px-4">Maintain efficency</td>
                </tr>

                <tr className="border-b border-complement">
                  <td className="py-4 px-4">Quaterly</td>
                  <td className="py-4 px-4">
                    Wash panels with mild water & soft brush
                  </td>
                  <td className="py-4 px-4">Prevent buildup</td>
                </tr>

                <tr className="border-b border-complement">
                  <td className="py-4 px-4">Yearly</td>
                  <td className="py-4 px-4">
                    Professional inspection of wiring & structure
                  </td>
                  <td className="py-4 px-4">Saftey&warranty validations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* second sec */}
        <div className="mt-4">
          <h1 className="text-2xl text-complement mb-4 font-semibold">
            2. Cleaning Procedure
          </h1>
          <ul className="list-decimal ml-6 space-y-1">
            <li>Turn off the inverter and AC disconnect.</li>
            <li>Use clean water and a soft sponge/brush.</li>
            <li>Avoid detergents or pressure washers.</li>
            <li>Rinse thoroughly and allow to air dry.</li>
          </ul>

          <p className="mt-4">⚠️ Do not stand directly on panels.</p>
        </div>

        <div className="mt-4">
    <h1 className="text-2xl text-complement mb-4 font-semibold"> 3. Monitoring System</h1>     
<p >
Solem Solar’s smart monitoring system (via app or web dashboard) allows:
</p>
<ul className="list-disc ml-6 space-y-1 mb-4 mt-4">
<li>Real-time energy production view</li>

<li>Fault alerts & inverter warnings</li>

<li>Historical graphs for ROI tracking</li>
</ul>
<p>If performance drops less than 10%, check for:</p>
<ul className="list-disc ml-6 space-y-1 mt-4">
  <li>New shading sources</li>

<li>Dirt accumulation</li>

<li>Faulty inverter or cable damage</li>
</ul>



        </div>

{/*  */}
        <div className="mt-8">
<h1 className="text-2xl text-complement font-semibold mb-4">4. Troubleshooting Quick Guide</h1>

           
            
          <div className="mt-6">
            <table className="min-w-full   text-center">
              <thead className="text-lg bg-complement text-primary">
                <tr>
                  <th className="py-4 px-4  border border-complement border-2">symptoms</th>
                  <th className="py-4  border border-complement border-2">possible cause</th>
                  <th className="py-4  border border-complement border-2">sollution</th>
                </tr>
              </thead>

              <tbody>
                <tr className="">
                  <td className="py-4 px-4 border border-complement border-2">Monthly</td>
                  <td className="py-4 px-4 border border-complement border-2" >
                    Visual check for dust, debris, bird droppings
                  </td>
                  <td className="py-4 px-4 border border-complement border-2">Maintain efficency</td>
                </tr>

                <tr className="">
                  <td className="py-4 px-4 border border-complement border-2">Quaterly</td>
                  <td className="py-4 px-4 border border-complement border-2">
                    Wash panels with mild water & soft brush
                  </td>
                  <td className="py-4 px-4 border border-complement border-2">Prevent buildup</td>
                </tr>

                <tr className="">
                  <td className="py-4 px-4 border border-complement border-2">Yearly</td>
                  <td className="py-4 px-4 border border-complement border-2">
                    Professional inspection of wiring & structure
                  </td>
                  <td className="py-4 px-4 border border-complement border-2">Saftey&warranty validations</td>
                </tr>
              </tbody>
            </table>
          </div>
           </div>


           {/*  */}
           <div className="mt-8">
            <h1 className="text-2xl text-complement font-semibold">5. Warranty & Support</h1>
            <ul className="list-disc mt-4 space-y-1 ml-6">
              <li>Panel Warranty: 12 years product, 25 years performance</li>
              <li>Inverter Warranty: 10 years standard</li>
              <li>Racking Warranty: 20 years structural integrity</li>
            </ul>
           </div>
        </div>
      
    </section>
  );
};

export default MeintananceGuide;
