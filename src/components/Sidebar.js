import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import { HiLogout } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link,useHistory } from "react-router-dom";
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
  const history = useHistory();


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
  const Logout = () => {
    dispatch(logout())
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    history.push("/")

      
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

      <Button className="btn"onClick = {Logout} endIcon={<HiLogout />}>
        Logout
      </Button>
    </nav>
  </IconContext.Provider>
</div>


      
    </div>
  );
}

export default Sidebar;
