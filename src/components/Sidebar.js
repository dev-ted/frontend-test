import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import { HiLogout } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarItems } from "../Data/SidebarItems";
import "../sass/sidebar.scss";
import { IconButton } from "@material-ui/core";
import { IoArrowBackOutline } from "react-icons/io5";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
 
  const [open, setOpen] = useState(false);
  const size = useMediaQuery("(max-width:800px)");
  const dispatch = useDispatch();


  useEffect(() => {
    if (!size) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  , [size]);

  const handleClick = () => {
   
    setOpen(!open);
    
    
  };
  const handleClose = () => {
    if(size){
      setOpen(false);
    }
  }

 

  return (
    <div className={`sidebar`}>
     
        <IconContext.Provider value={{ color: "#16C79A" }}>
          <span className="menu__icon">
            <IconButton onClick={handleClick}>
              <IoArrowBackOutline  /> 
            </IconButton>
          </span>
        </IconContext.Provider>
      

  <div className="container">
  <img
    className="logo"
    src="https://www.vetro.co.za/wp-content/uploads/2017/09/VetroMedia-BlackLogo.png"
    alt=""
  />
  <IconContext.Provider value={{ color: "#16C79A" }}>
    <nav>
      <ul>
        {SidebarItems.map((item, index) => {
          return (
            <li key={index} className={item.class}>
                
              <Link to={item.path} onClick = {handleClose }>
                <span className="icon">{item.icon}</span>
           <span>{item.title}</span>
                
              </Link>
            </li>
          );
        })}
      </ul>

      <Button className="btn"onClick = {() => dispatch(logout())} endIcon={<HiLogout />}>
        Logout
      </Button>
    </nav>
  </IconContext.Provider>
</div>


      
    </div>
  );
}

export default Sidebar;
