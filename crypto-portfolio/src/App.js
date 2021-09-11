import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar"
import Coin from "./components/CoinItem/Coin";
import { UpdatePortfolio } from "./components/UpdatePortfolio/UpdatePortfolio"

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  
  // Fetch data from the API after the component has rendered.
  // Pass in an empty dependency array, as the second argument
  // to allow the effect to run once after the initial render.
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Search through the list of coins, display each coin in the filteredcoins
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="header">
        <h1 className="brand">
        </h1>
        <form>
          <input
            className="inputField"
            type="text"
            onChange={handleChange}
            placeholder="Search a Coin"
          />
        </form>
      </div>
      <div className="coinsContainer">
      {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            /> 
          );
        })}
      </div>
    </div>
  );
}

export default App;