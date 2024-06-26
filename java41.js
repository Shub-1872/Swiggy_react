
import React from "react"
import ReactDOM from "react-dom/client"

// way to create the element
const heading=React.createElement("h1",{id:"heading"},"namste react");
// here this react element is the object and it is not the tag
//when we render this to the dom then it becomes tag

//rendering the react object 
const root=ReactDOM.createRoot(document.getElementById("root"));
// everything which will happen will happened in this react root
//whatever in the root will be replaced by this
root.render(heading);


//create the element using the JSX

//JSX is not the part of the react and also we can write the react without the JSX and it is used to make the easy react
//JSX is the convention in which we will merge the html and the js
// JSX is not the html in the javascript but it is like the html and it is more like the XMl 
 const Jsxheading= <h1 id="heading" className="head" tabIndex="1">Namste react is the new way to make</h1>;



 //here in the case of the JSX rememeber that we will go for the case of the camelcase attribute we will not go in the smallcase
 //read about the different attribute of the JSX

 // if i want to write the JSX in the multiple lines then we will wrap it in the open breacket  
console.log(heading) ;

console.log(Jsxheading) ;




//jsx is the pure javascript javascript understands ES 6 that is ECMAscript
//but using the parcel the jss code is transpiled before going to the engine
//JSX (transpiled before going to the js)->parcel->Babel

//React.createElement=>ReactElement->js object=>htmlelement(render)


//JSX=>(using the babel)React.createElement=>ReactElement->js object=>htmlelement(render)

// read about the babel





 
//here to avoid the writing of the npx parcel filename.html at place of that we will create our own script and then we will use that script to get or local host 
//we will went to the script tag and then there at the in the package.json file we will go to the main tag 
//and then we will make the scripts tag using the 
// "scripts":{
//     "start":"parcel lec41.html",
//     "build":"parcel build lec41.html",
//     "test":"jest"
//   },
//this whole code which i have mention above that set of the code i will put in the package.json
//here from nowonwards after making this script tag we will use the npm run start or npm run in the both cases we will have the file run but this is not for the npm build
//here this npm start which is equivalent to the npm run start and behind the scene it will help us to execute the npx parcel filename.html

//react components
// class based components-old
//function components-NEW 

// const headingname=()=>{
//     return <h1 id="heading">Namaste react from the javascript</h1>
// }
// this is the same as the below one

//react fuctional component it is a normal a javascript function which return the JSX code 
const Headingcomponent=()=>(

<div id="container">
<h1 id="heading1">Namaste react Functional comoponent</h1>
</div>)
//along witthis if i wanted to write it in the multiple line then we will go for the open brackets


//read the differences between the react component and the react element

// remember that we can render the reactelement but we can not render the react component

// to render the component
root.render(<Headingcomponent/>);

const elem=<span>React element</span>

const Title=()=>(
    <h1 className="head" tabIndex="1">Namste react is the new way to make</h1>
)
//suppose i want to rendeer this Title component in the the new component then I will follow this way 
// this is called the component composition
//read about the rendering of the component
const number=1000;
const Headingcomponent1=()=>(
    <div id="container">
        <Title/> 
        {elem}
    <h2>{8800+999}</h2>
{number} 
    <h1 id="heading1">Namaste react Functional comoponent</h1>
    </div>  
)



const title=(
<h1 id="heading" className="head" tabIndex="1">
    {elem}
    {39393939}

    Namste react is the new way to make</h1>
    
);


const data=api.getData();
// read how jsx remove the malicious data from this api if any bad data will come 

root.render(<Headingcomponent1/>);
root.render(title)
//remember that in the case of the react component we will go for the Uppercase varaibale naming 
//in the case of the react component if we will put the {} these type of the curly braces then we will see that anytype of the data can be copied easily
//here remember that we can not render the multiple things at the same time infact we need to create the component to di the same
//when we are combining the two react component then this is way----->>> <Title> ===<Title></Title>==={Title()}



/** HMR
 * Hot Module Replacement (HMR) is a feature that allows developers to update modules within a running React application without needing to reload the page.
 * help retain application state that would otherwise be lost during a full reload And save time and it is offered by webpack.
 */

/**  difference in the parcel and the web pack
 * both are used to bundle the code so thta they will look concidse
 * paraecle is easy for the beginners and for the medium rpoject and it also offers the hot replacement,a separate built in server and it also split our code into smaller code 
 * but for the case of the webpack it offers multiple advanced features like the tree shaking ,minifiacation,splittting and all
 */

/** All about the parcel cache 
 * do not need it add it in git as it can be made again after deleting cache with a command npm run build
 * he .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.
 */

/** all about the tree shaking process
 *  The Tree Shaking process reduces the download size of an application
 * Tree shaking not exporting the modules that are not needed by our application in the bundle file also known as the dead code elimination, it is not going to remove the unused code from the bundler but remember that using minifiers there will be elimination of the code
minifires like the UglifyJS plugin
*/

/**
 * to make the react element in to the react fucntional component jst convert it ot the arrow function
 * if we want to write the javascript in the jsx then make curly braces and in that braces write the javascript
 * play eiht the reactelement ,react component ,javasscript
 * u can also add the js in the react element using that same {}
 * there are three ways to render the react functional component 1><title/>,{title()},<title></title>
 */

/** about the JSX
 * SX represents JavaScript XML. JSX in React enables us to write HTML in it.
 */


/**  all about the XML
 * XML stands for Extensible Markup Language, and is a widely used standard for defining data formats.
 * JSX represents JavaScript XML. JSX in React enables us to write HTML in it.
 * whatever we will write in the jsx will convert by babel in the browser understandable format]
 * using babel our jsx will convert in the form of the React.createElement
 * Having a single parent element ensures that when JSX is compiled, it results in a single JavaScript expression, which makes it easier for React to understand how to render the component.
 */

/**  all about the fucntional components and the react component
 * Class-based components have a render() method, which returns the JSX code that defines the component's output
 * remember that whenever u are writing the code in the normal functon in the reactfunction component then do not forget to return the thing
 * remember if i want to render the react component in the react.createelement then we can also do that
 * const p1 = React.createElement(
    "div",
    { id: "name" },
    "hello nbhh",
    React.createElement(HeadingComponent, null)
 after this we can also add the element 
    */
