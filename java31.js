import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement(
    "div", 
    { id: "parent" },
    [React.createElement(
      "div", 
      { id: "child" }, 
      [React.createElement("h1", {}, "I am in the h1 tag"),
      React.createElement("h1", {}, "I am in a NA<SRTe "),
      React.createElement("h1", {}, "I am in a NA<SRTe ")
    ]
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

import ReactDOM from "react-dom/client"

//do the npm init 
// then go for the npm 
//i need to write the some of the command like the first command is 
//npx parcel (filename).html
//npx means we are hositing the npm package parcel and we are giving the source
//parecel will host the page of ours
// here we will avoid tge use of the npx parcel .html instead of this we will use the script 
//if we are not knowing that how to start the  prohect then jsuut go to the script tag of the package.json and there u will see that there is a script tag in that 
// script tag u can go and make the start and the build tag
//after making this start and the build tag eihter we can make the npm run start and the npm run build and this will do the same thing which earlier were getting happened
//now after this i we can do the npm start oinplace of the npm run start
//not work for the npm build 
//here npm start==npm run start amd this is running the file parcel index.html in the background
//package.json is the dependency or the configuratioan
// a bundler is the one which combine all the code of the html css javascript
// there are the two type of the dependency ,one is the dev dependency and the other one is non dev dependency
//read the difference between the caret and the tilde 
// by the use of the caret ,then this caret will automatically update our parcel
//read the difference between the package.json and the package-lock.json and it will keep the exact update of the version of the parcel
//sometimes we might say that our code is running on the local butnot on the production to avoid this we will use the hash
//transitive dependency
//remember that there is not only one dependency ,and not only one .json
//every package has its own dependency and it has own .json file
//if i have the package.json and the package-lock.json then i can create all the other packages
// npx parcel means the execution of the package
//cdn links is not the good way to use the react in ypur project
//to install the react in ur system :
//npm install react ||npm i react
//npm install react-dom|| npm i react-dom
// here we will wehn wee will go and the add the file in the html that this is the javascript file we will use the type module so that ourlinked file is not considered as the normalreact file 
//npx parcel  build filename.html
// using the above .html code we will see that our whole code will be in the html css java file

// from the earlier files 
// here what ever we have render will be replaced not appended
//root.render take the object and convert it to the tag
// here the h1 is not the tag infact it is the object
//in the case of the createElement we will see the blank space is the object where we will give the attribute to the tags
//to give more than one child we will pass the array of the element 

//here its all about the react 

// JSX stands for Javascript XML. It is a syntax extension in Javascript. It makes it easier for us to write and add HTML in React. It allows us to use an HTML-like syntax to describe React’s object tree
// Because JSX is not valid javascript, it cannot be understood by browsers. A transpiler is needed to convert JSX into a browser-compatible version. JSX 

// Virtual DOM is a lightweight copy of the Real DOM stored in the memory. React uses the virtual DOM represented as a tree. Each element acts as a node of this tree. The manipulation of real DOM is slow. So whenever changes are made to the webpage content, the changes are first made in the virtual DOM.
// React updates the virtual DOM. React maintains two virtual DOMs at a time. One is updated, and one is the previous DOM. Diffing is the process in which React compares the two versions and updates the necessary elements. React updates the browser's real DOM efficiently. This is known as Reconciliation.

//  the difference in the tilde and the carret 
// The tilde (~) notation is employed to match the latest patch version while freezing the major and minor versions. 
//after this just read the difference from the gfg 
// root.render(child) is a method used to render a React element (or component) into the DOM at the specified root container.
//remember that whenever u are using the getELementbyclass name then think to use it with this symbol[0] because that get element will represent the node list

//difference in the libraray and the framework 
/**
 * in the case of the framwework ,it will call our code but in the case of library our code will call certain functions that is whenever we have the power to call the code whenever we like
 * to call but in the case of the framework it will call to our code and in the certain cases it might be possible that it will call ourlibrary
 * jquery is the library but jango is the framwork
 * Frameworks provide ready-to-use tools, standards and templates for fast application developmen
 * Frameworks control the calling of libraries for our code
 * Frameworks give rules and guidelines on writing your code and structuring files and folders
 *  code library is like a real-life book library. You can pick the book when you want it as per your needs i.e. call the library functions when you want. 
A framework can be thought of as a photo frame where you have to consider the height and width of the frame for filling the photo i.e. you have to follow rules/standards/conventions of the framework to use it. 
in the case of the framework it will call our code ki kab kya hoga it will not decided by me and also the framework will provide me the various section to decide ki kab kya hoga butin the case of the library 
we will call our  code and also a framework is the software,now we might get confuse with the ids and the framework ,here ids will provide me the code editior ,build tools and the debugging tools to worite the code
 some of the example of the frmework 
 Boost: Provides free peer-reviewed portable C++ libraries. POCO: Great for building network-centric services. 
 WxWidgets: Used for developing native GUI applications

*/

/** difference between the react and the reactDOM
 * react is responsible for creating and managing the UI components using a declarative syntax ,managing component state and handling the rendering the logic
 * while reactDOM act as the bridge between the react application and the browser environment and it is responsible for the interacting the browswer's dom rendering react component into the actual web page 
 * and updating the DOM efficiently based on the changes in the virtual DOM 
 * 
 * about the various ways for the updation in the react dom
 * In the case, props of child components DO NOT depend on updated state of the parent component, the Browser DOM will be updated differently with Virtual DOM
 * In the case, props of child components depend on updated state of the parent component, the Browser DOM will be updated the same as Virtual DOM

 */



/**
 * here we are going to learn about the createRoot  in the browser every time when we refresh the page then our browser will update completely from the scratch but in the case
 * virtual dom this is not ocuur only changes occur in those pages where jaha jaha value change hogi whi change hoga bus
 * Reconcillation is like the comparing the two tree and then make changes
 * Reconcillation is the algorithm behind the  virtual dom
 * read the acedltite react fiber architecture
 * read the difference between the dom and the virtual dom
 * The fundamental contrast between the DOM and Virtual DOM is that the DOM represents the actual HTML structure of a web page, while the Virtual DOM is a lightweight copy of the DOM used by React to enhance performance while updating the actual DOM.
 * a virtual dom is the exact copy of the orginial browser and when we make changes then wo virtual dom par hota hai then at last whatever the changes are they will ocuur at the main screen
 */

/**
 * here the differences between the package.json and the package.lock.json
 * This file is primarily used for managing and documenting metadata about the project, including its name, version, author, dependencies, script
 * ackage-lock.json: This file is generated and updated automatically by npm when installing or updating packages. It is used to lock the exact versions of dependencies installed in the project, ensuring reproducibility and consistent installations
 * and also he specific resolved versions of all the dependencies, their sub-dependencies, and their exact installation locations.
 * 
 */

/** all about the cdn
 *  content delivery network (CDN), which will improve your website's speed by placing your content in different edge servers around the globe and delivering it to your visitors from the nearest server.
 * CDN is a network of servers that deliver web content to users based on their locatio
 */

/** all about the cross origin
 * he crossorigin attribute in the HTML <script> element controls Cross-Origin Resource Sharing (CORS) settings for the script element. CORS is a mechanism that
  allows resources on a web page to be requested from another domain outside their own domain. For example, a web page might make a request to load resources on another server, such as style sheets, iframes, images, fonts, or scripts
 * The crossorigin attribute also protects sensitive information from the third party when fetching results.
  The crossorigin attribute is used when a script on one domain tries to interact with resources from another domain. 
 */

  /** all about the emmets
   * Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, email designers type less, saving both keystrokes and time when building a campaig
   */

/**
 * when ever we will create the element using the ReactDOM.createElement is the object by suing the ReactDOM.createRoot(document.getElementById("root")); we will convert them into the tag of the html
 * React follows the principle of immutability, that a state and props should not be directly mutated
 *  using react.createelement, it's essential to note that the created elements themselves are immutable
 * it has the constructor as the fiber root node
 * Requires Babel to transform JSX to React.createElement. but when we use the React.createElement then it can be directly used 
 */