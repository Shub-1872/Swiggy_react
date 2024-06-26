import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/Body.js";
import RestaurantCard from "./component/RestaurantCard.js";




const styleCard={
    backgroundColor:"#f0f0f0"
};


const AppLayout=()=>{
  // console.log(<Body/>)
// this body is the object and 
  return (
<div className="app">
  
<Header />
  <Body />
  </div>
  );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


  