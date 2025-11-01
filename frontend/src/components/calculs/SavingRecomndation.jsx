import { useState } from "react";

export default function SavingRecomndation() {
  const [bill, setBill] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const monthlyBill = parseFloat(bill);
    if (!monthlyBill || monthlyBill <= 0) return;

    // Calculations
    const recommendedSize = (monthlyBill / 1200).toFixed(1);
    const monthlySavings = (recommendedSize * 120 * 7).toFixed(0);
    const yearlySavings = (monthlySavings * 12).toFixed(0);
    const estimatedCostMin = (recommendedSize * 30000).toFixed(0);
    const estimatedCostMax = (recommendedSize * 45000).toFixed(0);

    setResult({
      recommendedSize,
      monthlySavings,
      yearlySavings,
      estimatedCostMin,
      estimatedCostMax
    });
  };

  return (
    <div style={{ maxWidth: "420px", margin: "auto", padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "12px", textAlign: "center" }}>
        Solar Savings Calculator
      </h2>

      <input
        type="number"
        placeholder="Enter Monthly Electricity Bill (₹)"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <button
        onClick={calculate}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          background: "#0A9E49",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Calculate Savings
      </button>

      {result && (
        <div style={{ marginTop: "20px", padding: "16px", borderRadius: "10px", background: "#f3fff5" }}>
          <p><strong>Recommended Solar System Size:</strong> {result.recommendedSize} kW</p>
          <p><strong>Estimated Monthly Savings:</strong> ₹{result.monthlySavings}</p>
          <p><strong>Estimated Yearly Savings:</strong> ₹{result.yearlySavings}</p>
          <p><strong>Estimated System Cost:</strong> ₹{result.estimatedCostMin} - ₹{result.estimatedCostMax}</p>
        </div>
      )}
    </div>
  );
}
