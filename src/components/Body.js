import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantObjects from "../../utils/mockdata";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantObjects);

    const filterFood = () => {
        setListOfRestaurants(
            listOfRestaurants.filter(res => parseFloat(res.info.avgRating) > 4.3)
        )
    }
    
    return (
        <div className='body'>
            <div className='search'>
                {/* <input className='search-input' type='text'/> */}
                <button onClick={filterFood}>Search</button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
}

export default Body;