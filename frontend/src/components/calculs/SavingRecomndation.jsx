import { useState } from "react";

export default function SavingRecomndation() {
  const [bill, setBill] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const monthlyBill = parseFloat(bill);
    if (!monthlyBill || monthlyBill <= 0) return;

    // Calculations
    const recommendedSize = monthlyBill / 1200; // keep raw
    const monthlySavings = recommendedSize * 120 * 7;
    const yearlySavings = monthlySavings * 12;
    const estimatedCostMin = recommendedSize * 30000;
    const estimatedCostMax = recommendedSize * 45000;

    setResult({
      recommendedSize: recommendedSize.toFixed(1),
      monthlySavings: monthlySavings.toFixed(0),
      yearlySavings: yearlySavings.toFixed(0),
      estimatedCostMin: estimatedCostMin.toFixed(0),
      estimatedCostMax: estimatedCostMax.toFixed(0)
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-lg  shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-5">
          Solar Savings Calculator
        </h2>

        <input
          type="number"
          placeholder="Enter Monthly Electricity Bill (₹)"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          className="w-full border border-complement p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
        />

        <button
          onClick={calculate}
          className="w-full bg-complement hover:bg-element text-white py-3 rounded-lg transition"
        >
          Calculate Savings
        </button>

        {result && (
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-lg"><strong>Recommended Solar System Size:</strong> {result.recommendedSize} kW</p>
            <p className="text-lg"><strong>Estimated Monthly Savings:</strong> ₹{result.monthlySavings}</p>
            <p className="text-lg"><strong>Estimated Yearly Savings:</strong> ₹{result.yearlySavings}</p>
            <p className="text-lg"><strong>Estimated System Cost:</strong> ₹{result.estimatedCostMin} - ₹{result.estimatedCostMax}</p>
          </div>
        )}
      </div>
    </div>
  );
}
