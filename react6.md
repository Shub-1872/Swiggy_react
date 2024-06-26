here in this we will study about the monolith architecture and the mircroservices architecture 


all about the mircroservices architecture 
here in the case of the microservices we have the project for each and everything  , this is known as separation of concerns and single responsibilty principle
here  in this we can write the code in the any archtectiure
in the huge project we have the api,ui,database,

//way to fetch the data from the backened 
either we can fetch the data from the api and then render it it the time when our data is fetching from the api we wont see anything 
loads--->api--->render 

secondly we can 
loads-->render-->api-->render means here we willrender whtaever we have then again we will render the page after the fetching from the api we will again render means there is no blank screen and this is thebetter approach and in thte react we will use this 


now here in this we will read about the useEffect hooks 
hooks are the normal javascript function which has its own specific function 
usaEffect takes two arguments
read about the parameter and the arguments 
the first argumentss is the arrow,callbackf unction and the second one is dependency array
when my component renders then as soon as the render cycle finished then my use effect call back function willbecalled 
here in this if we seethat thereis any thing written in the console.log() then that willbe rendered first the the use effect thing willbe rendered

here to fetch the data from the api we will use the async await means we will made the data async and await till the fetch 

when ever we are using the async await then we will wait till the data come from the api and also as the data comes then we will convert it to the json using the 
cosnt fetchdata=fetch=>{
    const data=await fetch(

    )
}
const json=await data.json();


read about the cors chrome extension and the parse

here in this as i am fecting hthe api usign the use effect here react will re render the componenet of the data by replcing the listofresturant

**read about the special set variable in the react which is used to chaange the component of the listofresturant