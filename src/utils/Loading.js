import React from 'react'
import {Circle, } from 'better-react-spinkit'

function Loading() {
    return (
        <center style = {{display:"grid" , placeItems : "center" , height:"50vh" }}>
           <div>
         
           <Circle color="#16C79A" size = {100} />
           {/* <ThreeBounce color="#16C79A" size = {50} />
           <ChasingDots color="#16C79A" size = {50} /> */}
           </div>
        </center>
    )
}

export default Loading
