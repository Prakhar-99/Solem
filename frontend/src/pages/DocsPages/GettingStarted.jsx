import { NavLink } from "react-router-dom";

const GettingStarted = () => {
  return (
    <section className="w-full flex mb-4">
      <div className="max-w-7xl px-6 lg:px-12 mt-6">
        {/* 1. Introduction */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-complement">
            1. Introduction
          </h1>
          <p className="mt-4 text-md text-secondarylite leading-relaxed">
            Switching to solar energy is one of the smartest investments you can make.
            <br />
            This guide helps you understand how to select the best{" "}
            <span className="font-medium text-secondary">Solem Solar</span> panel system
            for your home or business, calculate your potential savings, and prepare
            your site for installation.
          </p>
        </div>

        {/* 2. Choosing the Right Solar Panel */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-complement">
            2. Choosing the Right Solar Panel
          </h2>
          <p className="text-sm text-secondarylite mt-4">
            Solem Solar offers multiple product lines tailored for different applications:
          </p>

          <table className="min-w-full table-auto text-center border-x-2 border-b-2 border-complement mt-6">
            <thead className="border-b-2 border-complement text-lg">
              <tr>
                <th className="py-4 capitalize">Power Output</th>
                <th className="py-4 capitalize">Ideal For</th>
              </tr>
            </thead>
            <tbody className="text-sm align-middle border-complement">
              <tr>
                <td className="px-4 py-4">340W</td>
                <td className="px-4 py-4">Small homes, minimal shading</td>
              </tr>
              <tr>
                <td className="px-4 py-4">410W</td>
                <td className="px-4 py-4">Medium-sized homes or small offices</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-4">540W</td>
                <td className="px-4 py-4">Commercial buildings and large rooftops</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. Site Assessment */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-complement">
            3. Site Assessment
          </h2>
          <h3 className="text-lg mt-4 font-medium text-secondary">
            Before installation, perform a quick evaluation:
          </h3>

          <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-y-3 mt-6 ml-5 text-element text-md">
            <li>Orientation: South-facing roofs yield maximum output.</li>
            <li>
              Tilt Angle: Ideally equal to your latitude (e.g., 25–30° in India).
            </li>
            <li>Shading: Avoid trees, chimneys, or antennas casting shade.</li>
            <li>Roof Condition: Must withstand panel and mounting weight.</li>
            <li>Space: Each panel requires ~1.8 m² of usable area.</li>
          </ul>

          <p className="mt-6 text-md text-secondary">
            If unsure, Solem’s certified installers can perform a free site audit.
          </p>
        </div>

        {/* 4. Estimating Power and Savings */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-complement">
            4. Estimating Power and Savings
          </h2>
          <p className="mt-4 text-md text-secondarylite">
            Use this simple method to estimate energy production:
          </p>

          <h3 className="mt-4 text-lg font-medium underline text-complement">
            Daily Energy (kWh) = System Size (kW) × 4.5 (average sun hours)
          </h3>

          <p className="mt-4 text-md text-secondarylite leading-relaxed">
            <span className="text-lg text-secondary font-medium">Example: </span>
            <br />
            A 3 kW system produces about 13.5 kWh/day, saving roughly ₹2,000–₹2,500/month
            depending on your local electricity rate.
          </p>

          <p className="mt-4 text-md text-secondarylite">
            Solem Solar also provides an online{" "}
            <span className="font-medium text-secondary">Savings Calculator</span> to
            estimate ROI, payback period, and CO₂ offset.
          </p>
        </div>

        {/* 5. Ordering Your System */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-complement">
            5. Ordering Your System
          </h2>

          <h3 className="mt-4 text-lg font-medium underline text-complement">
            You can order directly via:
          </h3>

          <ul className="list-disc ml-5 mt-4 text-secondary text-md space-y-3">
            <li>
              Official website:{" "}
              <NavLink
                to={"/products"}
                className="underline text-lg text-complement"
              >
                solem/product
              </NavLink>
            </li>
            <li>Authorized dealers (see network map)</li>
            <li>Corporate partnerships for bulk installations</li>
          </ul>
        </div>

        {/* 6. Pre-Installation Checklist */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-complement">
            6. Pre-Installation Checklist
          </h2>

          <ul className="list-disc ml-5 mt-6 text-md text-secondary space-y-3 marker:text-complement">
            <li>Roof inspected and in good condition</li>
            <li>No major shading</li>
            <li>Adequate access to electrical panel</li>
            <li>Local permits secured (if required)</li>
            <li>Installation date confirmed</li>
          </ul>

          <div className="mt-8">
            <NavLink
              to={"/document/installation"}
              className="px-5 py-3 bg-complement text-primary rounded-lg text-md font-medium hover:opacity-90 transition"
            >
              Installation Guide
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
