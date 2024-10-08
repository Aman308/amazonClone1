import React from "react";
import Logo from "../../img/logo.png";
import "../navbar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
// import Avatar from "@mui/material/Avatar";
import { Badge } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <header>
        <nav className="navBar">
          <div className="left">
            <div className="navlogo">
              <img src={Logo} alt="" aria-placeholder="search" />
            </div>
            <div className="location">
              <div className="info">
                <span className="text-sm">Deliver to Aman</span>
                <span className="locationIcon text-sm">
                  <LocationOnIcon />
                  Address
                </span>
              </div>
            </div>
            <div className="searchbar">
              <input placeholder="Search Amazon.in" type="text" name="" id=""  />
              <span className="searchIcon">
                <SearchIcon />
              </span>
            </div>
          </div>
          <div className="right">
            <div className="language">
              <span className="text-sm languageIcon"><LanguageIcon/>Language</span>
            </div>
            <div className="accouuntInfo">
                  <div className="info">
                  {/* <span className='text-sm'>Hello, Aman</span> */}
                  {/* <span className='text-sm'>Account & List</span> */}
                  <NavLink to="/signup" className='text-sm'>Signup</NavLink>
            </div>
            
            </div>
            <div className="accouuntInfo">
                  <div className="info">
                  <span className='text-sm'>Returns</span>
                  <span className='text-sm'>& Order</span>
                 
                  
            </div>
            {/* <Link to="/signup">Signup</Link> */}
        
          </div>
          <Badge badgeContent={0} color="primary">
              <span>
              <NavLink to="/cart" className='text-sm'><ShoppingCartIcon /></NavLink>
              </span>
            </Badge>
          </div>
        </nav>
      </header>
    </div>
  
  );
}
