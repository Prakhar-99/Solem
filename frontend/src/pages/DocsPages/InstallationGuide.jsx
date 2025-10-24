import React from "react";

export default function InstallationGuide() {
  return (
   <section className="w-full flex mb-4 ">
       <div className=" max-w-7xl px-6 lg:px-12 mt-4">
      <h1 className="text-3xl font-bold text-complement mb-6">
        Installation Guide — How to Install Solem Solar Panels
      </h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
        <p className="font-semibold text-yellow-800">
          ⚠️ Safety First: Only certified technicians or qualified electricians
          should perform installations.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-complement mb-3">1. Preparation</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Inspect all components: panels, racking, inverters, wiring, connectors.</li>
          <li>Verify roof structure: rafters strong, waterproofing intact.</li>
          <li>Plan layout: use design tools to maximize spacing and sun exposure.</li>
          <li>Shut down main power before any electrical work.</li>
        </ul>
      </section>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-complement mb-3">2. Mounting Structure Setup</h2>

        <h3 className="text-lg font-semibold mb-2">For Roof Installations:</h3>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Measure and mark rafter locations.</li>
          <li>Install flashing and stainless-steel mounting hooks.</li>
          <li>Attach aluminum rails to hooks.</li>
          <li>Ensure rails are parallel and level.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">For Ground Mounts:</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Set concrete footings according to blueprint.</li>
          <li>Anchor steel posts and mount rails.</li>
          <li>Verify alignment using laser or string level.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-complement mb-3">3. Panel Installation</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Place each Solem panel onto rails with clamps.</li>
          <li>Tighten mounting bolts to manufacturer torque.</li>
          <li>Leave 15–25 mm spacing between panels for airflow.</li>
          <li>Connect panel leads (MC4 connectors) in series for each string.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-complement mb-3">4. Electrical Connections</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>DC Wiring: Connect panel strings to inverter input.</li>
          <li>AC Wiring: Connect inverter output to main distribution board.</li>
          <li>Grounding: Bond all metallic components and frames.</li>
          <li>Labeling: Apply “DC Circuit” and “Solar Array Disconnect” labels per code.</li>
          <li>Use weatherproof conduits and UV-resistant cables.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-complement mb-3">5. Inverter & Commissioning</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Mount inverter near main electrical board (indoor or shaded outdoor).</li>
          <li>Connect DC input and AC output per wiring diagram.</li>
          <li>Configure inverter using Solem app or LCD screen.</li>
          <li>Turn ON system — verify production on monitoring app.</li>
          <li>Expected initial generation should match estimated system rating ±10%.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-complement mb-3">6. Post-Installation</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Perform a complete visual inspection.</li>
          <li>Check system voltage/current with multimeter.</li>
          <li>Record serial numbers for warranty.</li>
          <li>Provide customer with documentation pack.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-complement mb-3">
          7. Installation Best Practices
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Use stainless-steel hardware</li>
          <li>Keep wiring neatly secured</li>
          <li>Avoid cable contact with roof surface</li>
          <li>Maintain ventilation gap below panels</li>
          <li>Store unused panels in dry, shaded area</li>
        </ul>
      </div>
      </div>
    </section>
  );
}
