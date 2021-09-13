import React from "react";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io5";
import "../sass/storecard.scss";
function StoreCard({ store }) {
  return (
    <div className="storecard">
      <div  key={store.id}   className="storecard__container">
        <header className="header">
          <div className="header__icon">
            <IconContext.Provider value={{ color: "#16C79A" }}>
              <span className="card__icon">
                <IoIcons.IoStorefrontOutline />
              </span>
            </IconContext.Provider>
          </div>
          <span className="store__name">{store.name}</span>
        </header>

        <span className="store__address">{store.address}</span>

        <div className="store__bottom">
          <div className="joined">
            <span>
              Joined: <span className="date"> {store.created_at} </span>
            </span>
            <span>Has Loyalty</span>
          </div>
          <span>{`UID: ${store._uid}`}</span>
          <span>{`Store Code: ${store.code}`}</span>
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
