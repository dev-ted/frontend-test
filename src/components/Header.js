import { Avatar, Badge, IconButton, withStyles } from "@material-ui/core";
import { IoSettingsOutline } from "react-icons/io5";

import "../sass/header.scss";
import { IconContext } from "react-icons";
import { selectUser } from "../redux/userSlice";
import {useSelector} from 'react-redux'

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

function Header() {
    const user = useSelector(selectUser)
    // console.log("user is >>" ,user);
  return (
    <header className="header">
      <div className="header_container">
        <IconContext.Provider value={{ color: "#16C79A" }}>
          

          
            <h4 >{user?.email.substring(0, user?.email.lastIndexOf("@") + " ")}</h4>
          
          <div className="header__right">
            <IconButton>
              <IoSettingsOutline />
            </IconButton>

            <IconButton>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar>
                  {user?.email[0].toUpperCase()}
                </Avatar>
              </StyledBadge>
            </IconButton>
          </div>
        </IconContext.Provider>
      </div>
    </header>
  );
}

export default Header;
