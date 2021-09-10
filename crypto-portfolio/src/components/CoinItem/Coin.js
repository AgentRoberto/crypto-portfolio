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
    <div className="cryptoCoin">
      <img src={image}  className="coinLogo" />
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">${price.toLocaleString()}</p>
      <p className="coinMarketcap">Market Cap: ${marketcap.toLocaleString()}</p>
      <p className="coinVolume">Volume (24H): ${volume.toLocaleString()}</p>
      
      {priceChange < 0 ? (
        <div className="priceContainerDOWN">
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="priceContainerUP">
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default Coin;