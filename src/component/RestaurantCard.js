import {CDN_URL} from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
   const{
    cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime}=resData||{}
  
      return(
       
          <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
          <img className="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}  
          alt="res-logo" 
          />
         <h3>{name}</h3>
         <h4>{cuisines&&cuisines. join(", ")}</h4>
         <h4>{avgRating}</h4>
         <h4>38minutes</h4>
          </div>
         
      );
  };

  export default RestaurantCard

  /**
   * here there is the concept of the props
   * props are the read only 
   * they are used to transfer data 
   */