
import React from 'react'
import { IconContext } from 'react-icons'
import * as IoIcons from "react-icons/io5";
import '../sass/storecard.scss'
function StoreCard() {
    return (
        <div class="storecard">

            
       
        <div class="storecard__container">
            <header class="header">
            <div className="header__icon">
              <IconContext.Provider value={{ color: "#16C79A" }}>
                  <span className="card__icon">
                  <IoIcons.IoStorefrontOutline  />
                  </span>
             
              </IconContext.Provider>
              </div>
               <span className="store__name">Public Bank of Nepal</span>
               
            </header>
            
            <span className="store__address" >45 gabriel street</span>
            
                <div className="store__bottom" >
                    <div className = "joined" >
                        <span>Joined  <span class="date">  01/018 </span></span> 
                        <span >Loyalty</span>
                    </div>
                    <span>UID</span>
                    <span >code</span>
                </div>
           
        </div>
    </div>
    )
}

export default StoreCard
