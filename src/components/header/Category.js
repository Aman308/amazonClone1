import React from 'react'
import "../category.css";
import MenuIcon from '@mui/icons-material/Menu';
import Navimg from "../../img/nav.jpg"
export default function Category() {
  return (
    <div>
     <div className="catBar">
        <ul className="catList">
            <li className="catItem menuIcon"> <MenuIcon/>All</li>
            <li className="catItem">MX Player</li>
            <li className="catItem">Sell</li>
            <li className="catItem">Flights</li>
            <li className="catItem">Gift Cards</li>
            <li className="catItem">Browsing History</li>
            <li className="catItem">AmazonBasics</li>
            <li className="catItem">Buy Again</li>
            <li className="catItem">Aman's Amazon.in</li>
            <li className="catItem">Amazon Pay</li>
            <li className="catItem">Health, Household & Personal Care</li>
            <li className="catItem">Gift Ideas</li>
            <img src={Navimg} alt="" />
        </ul>
     </div>
    </div>
  )
}

