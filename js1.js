//now as we are not using the cdn links for the react so we will use the import option to import the react which we have been fetching 
import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement(
    "div", 
    { id: "parent" },
    [React.createElement(
      "div", 
      { id: "child" }, 
      [React.createElement("h1", {}, "I am in the h1 tag"),
      React.createElement("h1", {}, "I am in a NA<SRTe ")]
    ),
    React.createElement(
        "div", 
        { id: "child2" }, 
        [React.createElement("h1", {}, "I am in the h1 tag"),
        React.createElement("h1", {}, "I am in the h1 tag")]
      )]
  );
  console.log(parent);
const heading1=React.createElement("h1",{id:"heading"},"hello this is js");
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);


//npm is the biggest package manager and the libraries for the react project




//about the parcel
//dev build
//local server
//HMR=hot module replacement
//file watching algorithm-written in c++
// reliable caching -faster builds
// it took less time it is caching thing for use
// Image optimisation
// minification
//bundling
//compressing of the file
// cosistent hashing
//code splitting 
// differential bundling-support older browsers
//diagnostic
//error handling 
//HTTPs
//tree shaking means the removal of the unwanted error 
//read about the parcel from its documentation
//different dev and the production bundles



/**
 * Parcel’s builtin dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve
 * HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh.
 * CSS changes are automatically applied via HMR with no page reload necessary.
 *  If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran 
 */