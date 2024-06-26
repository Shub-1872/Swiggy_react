#react hooks 
normal javascript utility function 
there are two very important hooks 
-useState()-superpowerful state varible in react
to use this we have to do the import it using the named import
using this import { useState } from "react";we will import the usestate
the local state varible has the local range
way to create the state variable
const [listofrestaurant]=useState();
what ever we will pass in the () will become the default value of the listofRestaurant
when i will call the usestate() then that will give the normal list of the array and to recieve that lsit of the array we will use the const [listofrestaurant]


to modify the variable generated through the hooks variable need to be use with the function called set.
-useEffect()

// to wmpty the list in the react
const list=[];
list.push("abc");
list=[]  this will make our list clear
but to do the same in the react we will use the setListofRestraunt([]) this willmake the lsit of the rstaurant clear
**when ever a state variable updates react re render the components


react uses the reconcollation algorithm(react fiber)
virtual dom and the actual dom 
const arr=useState(resList);
const [listofresturants,setListofresturants]=arr;
const listofResturants=arr[0];
setListofresturants=arr[1];