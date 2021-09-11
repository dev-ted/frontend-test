import React from "react";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io5";
import "../sass/storecard.scss";
function StoreCard({ store }) {
  return (
    <div class="storecard">
      <div key={store.id} class="storecard__container">
        <header class="header">
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
              Joined <span class="date"> {store.created_at} </span>
            </span>
            <span>Loyalty Member</span>
          </div>
          <span>{store._uid}</span>
          <span>{store.code}</span>
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
