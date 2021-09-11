import React, {useState} from 'react'
import './UpdatePortfolio.scss';

/**
 * 
 * @param {*} props
 * Updates the portfolio value based on user events. 
 */
export const UpdatePortfolio = ({
  name,
  price
}) => {

    const [portfolio, setPortfolio] = useState([])
    const [total, setTotal] = useState(0)
    
    const onAddBtnClick = () => {
      setPortfolio(name);
      setTotal(parseFloat(price) + parseFloat(total));
    };
  
    const onRemoveBtnClick = () => {
      setPortfolio(name);
      setTotal(parseFloat(total) - parseFloat(price));
    };
    return (
        <div>
          <button className='btn-remove' onClick={onRemoveBtnClick}>Remove</button> 
          <div class="portfolio">
            
            
          </div>
        </div>
    )
}
