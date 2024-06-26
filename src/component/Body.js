import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import React, {useState,useEffect} from "react";


/**earlier when i was clicking on this then we won't see change on the ui so make the change on the ui we will  use the state variable as the listofresturant is a normal javascript variable
 * and to make this superpowerful varaible we will use the hooks 
 */
  

 const Body=()=>{
const [listOfRestaurants,setlistOfRestaurants]=useState(resList);
//whatever value we will pass in the usestate willl become the default value of the listofresturant 
//  let listOfRestaurants=[];


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&collection=83640&tags=layout_CCS_IceCreams&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Example: log the fetched data to the console

      // Process or use the fetched data as needed
      // For example, you can update state or perform other operations
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error appropriately (e.g., show error message to user)
    }
  };

console.log(setlistOfRestaurants);
console.log(listOfRestaurants);
const  handleFilterClick=function(){
  const filteredlist=resList.filter(function(res){
    console.log('filtering');
    return res.info.avgRating>4.4;
  });
  setlistOfRestaurants(filteredlist);
}


    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={handleFilterClick} 
            >
                Top Rated Resturant
            </button >
            </div>
        <div className="res-container">
          {
listOfRestaurants.map((restaurant,index)=>(
<RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
          ))}
       
        </div>
      </div>
      
    )
}


/**
 * rememembre that not using key<<<<<indexas the key<<<<unique id
 * read about the optional chaining 
 * read about the index as the key for the anti pattern
 */
export default Body