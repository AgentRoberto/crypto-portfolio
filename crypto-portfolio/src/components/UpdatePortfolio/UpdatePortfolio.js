import React, {useState} from 'react'
import './UpdatePortfolio.scss';

/**
 * 
 * @param {*} props
 * Updates the portfolio value based on user events. 
 */
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
          <div class="portfolio">
            <h1>Portfolio Value: {price}</h1>
            <h2>ROI: {price}</h2>
          </div>
        </div>
    )
}
