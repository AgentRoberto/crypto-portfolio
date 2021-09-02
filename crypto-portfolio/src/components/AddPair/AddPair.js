import React, {useState} from 'react'
import './AddPair.scss';

export const AddPair = (props) => {
    const [portfolio, setPortfolio] = useState([])
    
    const onAddBtnClick = () => {
        setPortfolio(portfolio.concat(props.name));
      };
    return (
        <div>
            <button class="btn-add" onClick={onAddBtnClick}>Add to Portfolio</button>
            {portfolio}
        </div>
    )
}
