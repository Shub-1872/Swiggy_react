all about the body section and the resturant section 
here in the case of the body when we are tryign ti make the card of hte meghana foods then we have that for 10 card it becomes messy so we have nake the component and then to  make it dynamic we render them in the body and then try to pass the arguments in the body in that component to make the dyamic and this is want we called the props
props are the normal javascript funciton


now hre we are going to make the project dynamic and to make that dynamice we have to iterate over the reslist
**rememeber we might think to render the component directly in the resturant card with the use fo the foreacg but htis is not possible we need to acuumulate it y accumulating the RestaurantCard components in an array and then rendering that array, you can effectively use a forEach loop to achieve the same result as map.

always remember that when ever we are rendering the <ResturantCard resdata={resList}/> what ever the name of the object will be use here 

 let {resname,cuisines,deliveryTime} =props;
console.log(resname)
const RestaurantCard=function({resname,cuisines,deliveryTime})


//about the destructuring 
      const RestaurantCard = function(props1) 
        let { rest1 = {} } = props1;
        const { name, cuisines, costForTwo, cloudinaryImageId } = rest1.info || {}; 
Means: "Extract rest1 from props1, and if rest1 is not defined, use an empty object {}."
"Extract name, cuisines, costForTwo, and cloudinaryImageId from rest1.info, and if rest1.info

in the image tag we might see that there is the use of the curly braces but we are using that becoz in the jsx whenever we want to use the string concatination we need to use the curly and now if we use the backticks then use the placeholder and if u use the " " then use + sign with cloudinaryimage id

remember one thing that the name with which we are passing the arguments in the component the same we will use while destructring

in thsi case we arepassing the id with the map and hence we can easily save the time in the rendering because if we will not give id  then on the addition of the every element react will render the whole page this will consyme the lot of teime

do some practice on mapping the things here 
read about the optional chaining  
const { rest1 } = props1;
  const { name, cuisines, costForTwo, cloudinaryImageId } = rest1?.info || {};
  the same destructuring using the otpional chaingin
  
read about the index as the key an anti pattern
read about the .join method in the java script

