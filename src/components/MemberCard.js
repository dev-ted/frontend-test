import { Avatar, Badge, IconButton, makeStyles, withStyles } from "@material-ui/core";
import React from "react";
import "../sass/memberCard.scss";
import {FaBirthdayCake} from 'react-icons/fa'


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#272727",
    color: "#272727",
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

const useStyles = makeStyles((theme) => ({
    
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
      marginLeft : "-10px",
      marginTop: "-10px",
      backgroundColor: "#272727",
     
    },
  }));

function MemberCard() {
    const classes = useStyles();
  return (
    <div class="card-container">
      <div class="avatar">
        <IconButton>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar className={classes.large}>t</Avatar>
          </StyledBadge>
        </IconButton>
      </div>
      <div className="public">
      <h3>Ricky Park</h3>
      <h6>079 0990 346</h6>

      </div>
    
      <div className="personal">
        <span><span style = {{ color : '#16C79A'}}><FaBirthdayCake /></span> 12 July 2017</span>
        <p>male</p>
      </div>

      <div class="__holder">
        <span>Balance</span>
        <p>R 1290</p>
      </div>
      <span className = "since">Joined : <span>12 june 2020</span></span>
      <div class="other details"></div>
    </div>
  );
}

export default MemberCard;
