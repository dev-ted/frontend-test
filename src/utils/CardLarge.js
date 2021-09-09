import React from "react";
import "../sass/card.scss";

function CardLarge({balance,transactions,title,heading1,heading2,points,currency,earn,redeem}) {
  return (
    <div className="card__large">
        {balance &&(
            <>
            <h4>{title}</h4>
      <div className="card__large__container">
        <div className="balance__holder">
          <span>
            <p>{heading1}</p>
            <p>{points}</p>
          </span>
        </div>
        <div className="points__holder">
          <span>
            <p>{heading2}</p>
            <p>{currency}</p>
          </span>
        </div>
      </div>
            </>
        )}

        {transactions &&(
             <>
             <h4>{title}</h4>
           <div className="card__large__container">
             <div className="balance__holder">
               <span>
                 <p style={{borderBottom : '2px solid #16C79A'}}>{heading1}</p>
                 <p>Points : {points}</p>
                 <p>Currency : {earn}</p>
               </span>
             </div>
             <div className="points__holder">
               <span>
                 <p style={{borderBottom : '2px solid #39A2DB'}}>{heading2}</p>
                 <p>points : {redeem} </p>
                 <p>currency: {currency}</p>
                 
               </span>
             </div>
             </div>
             </>
        )}
       




      
    </div>
  );
}

export default CardLarge;
