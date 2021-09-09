import React, {useState} from 'react'
import './UpdatePortfolio.scss';

export const UpdatePortfolio = (props) => {
    const [portfolio, setPortfolio] = useState([])
    const [price, setPrice] = useState(0)
    const [clicked, setClick] = useState(false)

    const onAddBtnClick = () => {
        setPortfolio(props.name);
        setPrice(parseFloat(props.price) + parseFloat(price));
        setClick(true)
      };
      const onRemoveBtnClick = () => {
        setPortfolio(props.name);
        setPrice(parseFloat(price) - parseFloat(props.price));
        setClick(false)
      };
    return (
        <div>
          
          <button class="btn-add" onClick={onAddBtnClick}>Add to Portfolio</button> 
          <button class="btn-remove" onClick={onRemoveBtnClick}>Remove from Portfolio</button>
          
          {clicked ?          
            <h1>Added: {portfolio}</h1> : 
            <h1>Removed: {portfolio}</h1>
          }
          <div class="portfolio">
            <h1>Portfolio Value: {price}</h1>
          </div>
        </div>
    )
}
