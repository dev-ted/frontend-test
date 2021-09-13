import React from "react";
import "../sass/card.scss";

function CardLarge({title,heading1,heading2,value,average}) {
  return (
    <div className="card__large">
      
            <h4>{title}</h4>
      <div className="card__large__container">
        <div className="balance__holder">
          <span>
            <p>{heading1}</p>
            <p>{value}</p>
          </span>
        </div>
        <div className="points__holder">
          <span>
            <p>{heading2}</p>
            <p>{average}</p>
          </span>
        </div>
      </div>
      
        
       




      
    </div>
  );
}

export default CardLarge;
