




const SystemComponent = () => {
  return (
    <section className="w-full flex mb-8">
      <div className="max-w-7xl px-6 lg:px-12 mt-4">

     <div>
      <h1 className="text-3xl font-bold text-complement">SystemComponent — Technical Reference</h1>
     </div>
      {/* 1. Solar Panels */}
      <div className="mt-8">
        <h1 className="text-complement text-2xl font-semibold">1. Solar Panels</h1>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Model: Solem X-Series</li>
          <li>Type: Monocrystalline PERC cells</li>
          <li>Efficiency: up to 22.6%</li>
          <li>Dimensions: 1775×1048×35 mm</li>
          <li>Weight: 19.5 kg</li>
          <li>Operating Temperature: –40 °C to +85 °C</li>
          <li>Max Wind Load: 2400 Pa | Snow Load: 5400 Pa</li>
          <li>Connector Type: MC4</li>
          <li>Frame: Anodized aluminum, black finish</li>
        </ul>
      </div>

      {/* 2. Inverters */}
      <div className="mt-8">
        <h1 className="text-complement text-2xl font-semibold">2. Inverters</h1>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Models: Solem INV-3K, INV-5K, INV-10K</li>
          <li>Max Efficiency: 98.6%</li>
          <li>MPPT Range: 120–550 V</li>
          <li>Communication: Wi-Fi / RS485 / Ethernet</li>
          <li>Overvoltage, reverse polarity, and arc-fault protection</li>
          <li>Integrated monitoring app: SolemView™</li>
        </ul>
      </div>

      {/* 3. Mounting Systems */}
      <div className="mt-8">
        <h1 className="text-complement text-2xl font-semibold">3. Mounting Systems</h1>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Roof Mount: Aluminum rails, stainless-steel fasteners</li>
          <li>Ground Mount: Galvanized steel frame</li>
          <li>Tilt Range: 0–45°</li>
          <li>Compliance: IS/IEC 62548</li>
        </ul>
      </div>

      {/* 4. Wiring & Cabling */}
      <div className="mt-8">
        <h1 className="text-complement text-2xl font-semibold">4. Wiring & Cabling</h1>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>DC Cable: 4–6 mm² UV-resistant copper</li>
          <li>AC Cable: per load capacity</li>
          <li>Connectors: All connectors IP67-rated</li>
          <li>Include proper cable management clips to avoid chafing</li>
        </ul>
      </div>

      {/* 5. Monitoring Devices */}
      <div className="mt-8">
        <h1 className="text-complement text-2xl font-semibold">5. Monitoring Devices</h1>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Device: SolemView Gateway</li>
          <li>Tracks generation, consumption, grid export/import</li>
          <li>Mobile app with cloud sync</li>
          <li>Alerts for performance dips and inverter faults</li>
        </ul>
      </div>

      {/* 6. Safety & Compliance */}
      <div className="mt-8">
        <h1 className="text-complement text-2xl font-semibold">6. Safety & Compliance</h1>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>IEC 61215 / 61730 (Safety & Performance)</li>
          <li>BIS IS 14286 (India Standard)</li>
          <li>ISO 9001, ISO 14001 manufacturing</li>
          <li>CE and RoHS compliant</li>
        </ul>
      </div>

      {/* 7. Recommended Configurations */}
      <div className="mt-8">
        <h1 className="text-complement text-2xl font-semibold">7. Recommended Configurations</h1>
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full border border-complement text-center">
            <thead className="bg-complement text-primary">
              <tr>
                <th className="border border-complement border-2 px-4 py-2">System Size</th>
                <th className="border border-complement border-2 px-4 py-2">Panels</th>
                <th className="border border-complement border-2 px-4 py-2">Inverter</th>
                <th className="border border-complement border-2 px-4 py-2">Application</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-complement border-2 px-4 py-2">3 kW</td>
                <td className="border border-complement border-2 px-4 py-2">8 × Solem X1500</td>
                <td className="border border-complement border-2 px-4 py-2">INV-3K</td>
                <td className="border border-complement border-2 px-4 py-2">Residential</td>
              </tr>
              <tr>
                <td className="border border-complement border-2 px-4 py-2">5 kW</td>
                <td className="border border-complement border-2 px-4 py-2">12 × Solem X1500</td>
                <td className="border border-complement border-2 px-4 py-2">INV-5K</td>
                <td className="border border-complement border-2 px-4 py-2">Large home</td>
              </tr>
              <tr>
                <td className="border border-complement border-2 px-4 py-2">10 kW</td>
                <td className="border border-complement border-2 px-4 py-2">22 × Solem X2000</td>
                <td className="border border-complement border-2 px-4 py-2">INV-10K</td>
                <td className="border border-complement border-2 px-4 py-2">Commercial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 8. End-of-Life & Recycling */}
      <div className="mt-8">
        <h1 className="text-complement text-2xl font-semibold">8. End-of-Life & Recycling</h1>
        <p className="mt-2">
          Solem supports eco-friendly recycling through its Solar Reclaim Program,
          ensuring that 95% of materials are recovered and reused.
        </p>
      </div>
      </div>
    </section>
  );
}


export default SystemComponent
