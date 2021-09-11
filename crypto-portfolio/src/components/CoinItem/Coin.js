import React, { useState, useEffect } from "react";
import { UpdatePortfolio } from "../UpdatePortfolio/UpdatePortfolio";
import "./Coin.scss";

/**
 * @param {*} name, price, symbol, marketcap, volume, image, pricechange.
 * The values of the Parameters being passed in is obtained via API calls to the Coingecko API
 * This functional component simply displays the given data in a clean and readable format.
 * If the 24hr price change of a coin is > 0, the percentage change will be displayed with a green background,
 * else the background will be red to indicate a decreasing 24hr price change, this is achieved through conditional rendering.
 */
const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {

  const [portfolio, setPortfolio] = useState([])
  const [total, setTotal] = useState(0)
  const [click, setClick] = useState(0)
  var i=click;
  
  const onAddBtnClick = () => {
    setPortfolio(name);
    setTotal(parseFloat(price) + parseFloat(total));
    setClick(++i)
  };

  const onRemoveBtnClick = () => {
    setPortfolio(name);
    setTotal(parseFloat(total) - parseFloat(price));
    setClick(--i)
  };

  return (
    <div className="crypto-coin">
      <img src={image}  className="coin-logo" />
      <div className="coin-name-wrap">
        <h1 className="coin-name">{name}</h1>
        <p className="coin-symbol">{symbol}</p>
      </div>
      <p className="coin-price">${price.toLocaleString()}</p>
      <p className="coin-marketcap">Market Cap: ${marketcap.toLocaleString()}</p>
      <p className="coin-volume">Volume (24H): ${volume.toLocaleString()}</p>
      
      {priceChange < 0 ? (
        <div className="price-containerDOWN">
          <p className="price-change">{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="price-containerUP">
          <p className="price-change">{priceChange.toFixed(2)}%</p>
        </div>
      )}
      <div className="btns">
        <div className="add-coin" >
          <button className='btn-add' onClick={onAddBtnClick}>Add</button>
        </div>
        <div className="remove-coin" >
          <button className='btn-remove' onClick={onRemoveBtnClick}>Remove</button>
        </div>
      </div>
      {total}
      <p>Total Holdings: {click}</p>

    </div>
  );
};

export default Coin;