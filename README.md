/** all about the lec5
 * header
 * -LOGO
 * -Nav items
 * Body
 * -search
 * -Restaurant container
 * -restaurant card
 * -img
 * -name of the ers,star,rating,csuisine,deletime
 * Footer
 * -copyright
 * -links;
 * -address
 * -contact
 */



//here do not get just started 
//here make the header which consist of the logo on the left and the home about and the some blinks on the right
//then go make the body which essentially consist of the search bar and the search button
// after this we have the various restaurant  which contains the image of the restaurant card


/when ever we will the set of the code which is repeeated then use the component
//remember that if we want ot give the css in this file then use the object of the javascript and in this css file make the obejct of that property and theb 
//style={objectname} using this we will give the css 
//here in this we will can also make the object of the javascript and then we can push them in the style tag

//now to every card give the onhover,border property
//here we think how to make the component
//add the css to this cards
//here make these card dynamic

/**
 * concepts of the props 
 * to make the dynamic component ,they are the normal argument of a function
 *passing props to a function is like the passing argument to the funfciton 
 the way we are passing the arguments to the fucntion is like the passing the promps to the functions
*to use the javascript in the jsx we will use the curly braces and hecne we will her also

 */

/**
 * destructuring on the fly rpalcement of the props
 * const{resName,cuisines}=props
 * the data will back to us in the form of the json
 */

/**
 * config dirven ui it is used in the swiggy think for this and read about it
 * all the ui is driven by the config
 */

/**
 * if ewewant to pass anything in the function then we see then resturant card function in which u are sending the function
 * and with whatever data name we will pass the same will show ther e
 * here in this case as we aretrying to fetch the cuisines array from the data and we want ki they should separated from the comma
 * then we use the resData.info.cuisines.join(", ") this method to do
 * read about the optional chaining
 */


/**
 * like above what we are doing is that we are getting all the things separatley so we will destrucutre them to get the good look of our code
 * now we are targetting the way we are giving the values to the restutantcard
 * when we want to pass the data dynamically
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} /> 
        now what about if there are 100va l 
        here we will use sthe for loop or the map metho
* when u are fetching the data from the api then use this method like this resturant.info because info is the main object
 */


/**
 * read about the destructuring and the optional chaining 
 */

/**
 * when ever we arelooping over anything then always give id because when the new element comes and we our element do not have the id 
 then the react will render all the thing from the starting after cleaning all the container becoz it does not know wher to render
 * render,rendering,recycle
 *here in case of the mapping whenever we want to map the thing then we will use it index but never use it as the key 
 */

 /**
 hooked notes 
 here read about the file structure 
 here in this we will made the separate file for each and every componenet and hence to importthose file we need to export that file 
here remember that we can export or import form anywhere to anywhere but keep one thing in mind the location of the file if hteya are in the same folder the jsut the file name and if they are in the different folder along with the folder naeme


there are total two different type of the export 
default export and the other one is the named export 
in the single u can have the single default export u can nothave the multiple default 

to import the named default
import {CDN_LOGO} from "../../utils/constants" 


can i use the default export and the named export
remember that only the filename of the component will be consider for the capital letter

in one filewe can have only one default export but to default mutiple thing we will sue name default


here all about the props and the destructuring in the react
 Props are a way to pass data from a parent component to a child component
Destructuring is a way to extract values from objects or arrays and assign them to variables.
Props are read-only, meaning that they cannot be changed by the child component. This makes them a safe way to pass data from parent to child
earlier when we have to acess the object then we will go through htis way 
const person = {
  firstName: "Lindsay",
  lastName: "Criswell",
  city: "NYC"
}
console.log(person.firstName) // Lindsay
console.log(person.lastName) // Criswell
console.log(person.city) // NYC 
 but in the ES6 we get teh chance to remove this person tag before each and every variable we will sue the 
 const { firstName, lastName, city } = person;
 and then
 console.log(firstName) // Lindsay
console.log(lastName) // Criswell
console.log(city) // NYC



remember thatpassing arguments to the function is like passing props to the function
  */


optional chaining
the optional chaining operator (?.) allows you to access properties or methods without the need for explicit null or undefined checks. If any intermediate property in the chain is null or undefined, the expression short-circuits, and the result is set to undefined.
short-circuiting" refers to the behavior where the evaluation of an expression stops as soon as a null or undefined value is encountered along the chain of properties or methods being accessed


***usestatehooks()
here in this we will pass the two argument one is our thing in which we want to add the state variable second one is the one in which the changed array or list is passed as the arguments in that array 

const [state, setState] = useState(initial values goes here)
The useState() hook takes the first (initial) value of the state variable as its argument. The second value then sets your state, which is why it's always initiated as setState

**useState can only be used inside React functional components or other custom hooks. They cannot be used in regular JavaScript functions or outside the component scope.
so do not started to applyit over the normal js fucntion 

State management in React involves using hooks like useState to declare and manage component state. Hooks should be used inside functional components, not outside. This is because hooks are tied to the component's lifecycle and state management mechanism provided by React


***if i wna t ot make any change in the function then remember that we shuld pass itin the form of the props ,to practice it make a object and make the changes in htem

**here about the second argument in the useState function  (setState) does not accept a callback argument, unlike the class component's setState method. 
***when we call the useState()then we will see that they return the array which we will store in the form of the array
let arr[]=useState();


**whatever value we will pass in the useState will become the default value of the listofresturant let listOfRestaurants=[]; we can not make the direct changes aswe willmake in the normal javascript function here whatever changes we hava to make we have to use hte setlistofresturant

**react is making fast because of the dommanipulaiton 
**diff algorithm and the reconcillation,react fiber form the acdlite 
**incrmental rendering



