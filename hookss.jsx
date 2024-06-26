import React from "react"
import ReactDOM from "react-dom/client"
import React, {useState,useEffect} from "react";



//this is the basic project on the hooks in which we learn the about the various ways to make the change in the object while clicking the button
//think about the whole project it works 
 
// const obj={
//     name:"john",
//     age:30
// };

// const [obj1,setobj1]=useState(obj);
// function changed(){
// setobj1({
//     name:"shubham",
//     age:89
// })
//think why becoz they are defined in the component only
// }

// const initialObj = {
//     name: "john",
//     age: 30
// };

// const Func1=function(props){
//  const {onChange}=props;
//  const handleClick=function(){
//     onChange({
//         name:"shubham",
//         age:89
//     });
//  };
//  return (
// <div>
//             <button onClick={handleClick}>
//                 Click me to see the change
//             </button>
//         </div>
//  )

// };


// const App=()=>{
//     const[obj1,setObj1]=useState(initialObj);
// console.log("newa stat",obj1)
//     const changed=function(newObj){
//         console.log('Changed called with:', newObj);
//         return(
//             setObj1(newObj)
//         )
//     }
//     console.log('current state', obj1)
//     return(
//         <div>
//             <Func1 onChange={changed}/>
//             <p>Name:{obj1.name}</p>
//             <p>age:{obj1.age}</p>
//         </div>
//     )
// }

// const root1=ReactDOM.createRoot(document.getElementById("root"));
// root1.render(<App/>)


//project 02

//in this project we will learn about the normal hooks that how it changes when it is there
// const Signin1 = () =>{
//     return (
//       <div>
//           <div>
//               <button type="button">Sign Out</button>
//               <p>Welcome back, good to see you in here</p>
//           </div>
//           <div>
//               <button type="button">Sign In</button>
//               <p>Please Sign in</p>
//           </div>
//       </div>
//     )
//   }


//   const Signin=function(){
//     const [signedin, setSignedin] = useState(false);
//     const handleSignin = () => {
//         setSignedin(true)
//     }
//     const handleSignout = () => {
//         setSignedin(false)
//     }
//     console.log(signedin);
//     return(
//         <div>
//                        { signedin ? ( 
//         <div>
//             <button type="button" onClick={handleSignout}>Sign Out</button>
//             <p>Welcome back, good to see you in here</p>
//         </div>) :
        
//         (<div>
//             <button type="button"onClick={handleSignin}>Sign In</button>
//             <p>Please Sign in</p>
//         </div>)
//            }
//         </div>
//     )
//   }

//   let root1=ReactDOM.createRoot(document.getElementById("root"));
//   root1.render(<Signin/>)


const Newcounter = () => {
    const [count, setCount] = useState(0)
console.log(count);
    const incrementCount = () => {
        setCount(count + 1)
    }
    console.log(setCount);
    return (
        <div>
            <button type="button" onClick={incrementCount}>You clicked  
            {count} times</button>
        </div>
    )
}
  let root1=ReactDOM.createRoot(document.getElementById("root"));
  root1.render(<Newcounter/>)

