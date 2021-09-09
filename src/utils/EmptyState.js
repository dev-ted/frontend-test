import React from "react";

function EmptyState({ image, alt, message, title, button, onClick, hidden }) {
  return (
  
      <div className="empty__state">
        <img src={image} alt={alt} />
        
          <h5>{message}</h5>
       

        <button onClick={onClick}>{title}</button>
      </div>
   
  );
}

export default EmptyState;
