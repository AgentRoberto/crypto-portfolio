import React, {useState} from 'react'
import './AddPair.scss';

export const AddPair = (props) => {
    const [portfolio, setPortfolio] = useState([])
    const [price, setPrice] = useState(0)

    const onAddBtnClick = () => {
        setPortfolio(props.name);
        setPrice(parseFloat(props.price) + parseFloat(price));
      };
    return (
        <div>
            <button class="btn-add" onClick={onAddBtnClick}>Add to Portfolio</button>
            <div>{portfolio}</div>
            <div>{price}</div>
        </div>
    )
}
