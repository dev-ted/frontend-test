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

function MemberCard({members}) {
    const classes = useStyles();
  return (
    <div key ={members.id} className="card-container">
      <div className="avatar">
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
      <h3>{`${members.firts_name}  ${members.last_name}`}k</h3>
      <h6>{members.cell_number}</h6>

      </div>
    
      <div className="personal">
        <span><span style = {{ color : '#16C79A'}}><FaBirthdayCake /></span> {members.dob}</span>
        <p>{members.gender}</p>
      </div>

      <div className="__holder">
        <span>Balance</span>
        <p>{ `R ${members.balance}`}</p>
      </div>
      <span className = "since">Joined : <span>{members.created_at}</span></span>
      <div className="other details"></div>
    </div>
  );
}

export default MemberCard;
