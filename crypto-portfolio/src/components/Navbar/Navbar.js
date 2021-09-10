import React from 'react'
import './Navbar.scss';

/**
 * Simple Navbar to display the application name
 */
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='crypto-wallet'>
                <h1 id="nav-id">Coin Tracker</h1>
            </div>
        </div>
    )
}

export default Navbar