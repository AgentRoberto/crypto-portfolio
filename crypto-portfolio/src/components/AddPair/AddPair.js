import React, {useState} from 'react'
import './AddPair.scss';

export const AddPair = (props) => {
    const [portfolio, setPortfolio] = useState([])
    
   
    return (
        <div>
            <button class="btn-add" >Add to Portfolio</button>
            {portfolio}
        </div>
    )
}
