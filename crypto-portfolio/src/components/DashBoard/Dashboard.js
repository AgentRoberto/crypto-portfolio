import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h1>Please select a currency pair</h1>;
  }
  return (
    <div className="dashboard">
      <h2>{`Price = $${price}`}</h2>

      <div className="chart-container">
        <Line type="radar" data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;
