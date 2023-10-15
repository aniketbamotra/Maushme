import React from 'react'
import DarkLogo from "../images/dark-logo.png"

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-14 py-4 col-span-full'>
        <div className="logo-wrapper">
            <img src={DarkLogo} alt="" srcset="" />
        </div>
        <div className="menu-list">
            <ul className='flex gap-9 text-xl body'>
                <li>Shop</li>
                <li>Collections</li>
                <li>Giftings</li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar