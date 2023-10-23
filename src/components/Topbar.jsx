import React from 'react'
import DarkLogo from "../images/dark-logo.png"

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-14 py-4 col-span-full'>
        <div className="logo-wrapper">
            <img src={DarkLogo} alt="" srcset="" />
        </div>
        <div className="menu-list">
            <ul className='flex gap-9 text-base body'>
                <li><a href="/">Home</a></li>
                <li><a href="https://maushme.shop/">Shop</a></li>
                <li><a href="/Collections">Collections</a></li>
                <li><a href="https://maushme.shop/?page_id=6773">Giftings</a></li>
                <li><a href="https://maushme.shop/?page_id=6792">About Us</a></li>
            </ul>
        </div>
        <div className="top-icon">
        <ul className='flex gap-9 text-base body'>
                <li>Account</li>
                <li>Wishlist</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar