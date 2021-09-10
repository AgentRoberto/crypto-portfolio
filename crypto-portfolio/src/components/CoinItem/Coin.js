import React from "react";
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
            <button className='btn-add'>Add</button> 
        </div>
        <div className="remove-coin" >
            <button className='btn-remove'>Remove</button> 
        </div>
        </div>
    </div>
  );
};

export default Coin;