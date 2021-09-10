import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

/**
 * 
 * @param {*} price, data
 * This component displays the dashboard chart of the chosen asset.
 * If no asset has been selected from the dropdown menu then
 * the default display will be "Please select a currency pair"
 */
function Dashboard({ price, data }) {
  return (
    <div className="dashboard">
      <h2>{`Price = $${price}`}</h2>
      <div className="chart-container">
        <Line type="radar" data={data}/>
      </div>
    </div>
  );
}

export default Dashboard;
