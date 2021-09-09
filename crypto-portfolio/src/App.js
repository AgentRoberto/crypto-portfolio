import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./components/DashBoard/Dashboard";
import { formatData } from "./utils";
import "./App.css";
import { UpdatePortfolio } from "./components/UpdatePortfolio/UpdatePortfolio"
import Navbar from "./components/Navbar/Navbar"
function App() {
  const [currencies, setCurrencies] = useState([])
  const [pair, setPair] = useState('')
  const [price, setPrice] = useState('0.00')
  const [pastData, setPastData] = useState({})
  const ws = useRef(null)

  let first = useRef(false)
  const url = 'https://api.pro.coinbase.com'

  useEffect(() => {
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    let pairs = [];

    const apiCall = async () => {
      await fetch (url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data));
      
      // Filter to show only USD pairs
      let filtered = pairs.filter((pair) => {
        if(pair.quote_currency === "USD") {
          return pair;
        }
      });
      filtered = filtered.sort((a, b) => {
        if(a.base_currency < b.base_currency) {
          return -1;
        }
        return 0;
      });
      setCurrencies(filtered);

      first.current = true;
    };

    apiCall();
  }, []);

  useEffect(() => {
    if (!first.current) {
      return;
    }
    let msg = {
      type: "subscribe",
      product_ids: [pair],
      channels: ["ticker"]
    };
    let jsonMsg = JSON.stringify(msg);
    ws.current.send(jsonMsg);

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=3600`;
    const fetchHistoricalData = async () => {
      let dataArr = [];
      await fetch(historicalDataURL)
        .then((res) => res.json())
        .then((data) => (dataArr = data));
      
      let formattedData = formatData(dataArr);
      console.log(formattedData);

      setPastData(formattedData);
    };

    fetchHistoricalData();

      ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data);
      if (data.type !== "ticker") {
        return;
      }

      if (data.product_id === pair) {

        setPrice(data.price);
      }
    };
  }, [pair]);

  const handleSelect = (e) => {
    let unsubMsg = {
      type: "unsubscribe",
      product_ids: [pair],
      channels: ["ticker"]
    };
    let unsub = JSON.stringify(unsubMsg);

    ws.current.send(unsub);

    setPair(e.target.value);
  };
  return (
    <>
    <Navbar />
    <Dashboard price={price} data={pastData} />

    <div className="container">
      {
        <select class="dropdown" name="currency" value={pair} onChange={handleSelect}>
          {currencies.map((cur, idx) => {
            return (
              <option key={idx} value={cur.id}>
                {cur.display_name}
              </option>
            );
          })}

        </select>
      }
      <UpdatePortfolio name={pair} price={price}/>
    </div>
    </>
  );
}

export default App;
