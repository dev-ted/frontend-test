import { withStyles,Badge } from '@material-ui/core';
import React from 'react'
import { IconContext } from "react-icons";

import '../sass/global.scss'
import { prettyPrintStat } from './Formater';

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

function Card({title,number,icon,store,member,active,blocked,loyalty,voucher}) {
    return (
        <div className="card">
              <div className="card__header">
                    
                    <h4>{title}</h4>
                   
                    <div className="card__number">
                    <span >{prettyPrintStat(number)}</span>
                 

                    </div>
                    {store || member  ?( <small>{`active: ${active}`}</small>) : null }
                   {member && <small>{`Blocked: ${blocked}`}</small>}
                   {store && <small>{`Loyalty No: ${loyalty}`}</small>}
                   {store && <small>{`Vouchers No: ${voucher}`}</small>}
                   
                </div>
                
            {store ? (
                <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot">
              <div className="icon__holder">
              <IconContext.Provider value={{ color: "#16C79A" }}>
                  <span className="card__icon">
                      {icon}
                  </span>
                 
             
              </IconContext.Provider>
              </div>
              
              </StyledBadge>
              
            ) : (
                <div className="icon__holder">
              <IconContext.Provider value={{ color: "#16C79A" }}>
                  <span className="card__icon">
                      {icon}
                  </span>
                  
             
              </IconContext.Provider>
              </div>

            )}
                
        </div>
    )
}

export default Card
