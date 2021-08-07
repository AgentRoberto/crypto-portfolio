import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

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
      console.log("pairs", pairs);
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
      console.log(filtered);
      setCurrencies(filtered);

      first.current = true;
    };

    apiCall();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
