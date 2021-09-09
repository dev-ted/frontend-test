import React, {  useRef  } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// function Snackbars({ open, message, severity, onClose }) {

//   
// }
const Snackbars = ({open, message,severity,onClose}) =>{
    
  const ref =  useRef(null)
  

  return (
        <div>
          <Snackbar
          ref ={ref}
            
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
          >
            <Alert  onClose={onClose} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
        </div>
      );
} 
export default Snackbars;
