import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restaurantObjects from "../../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const filterFood = () => {
        setListOfRestaurants(
            listOfRestaurants.filter(res => parseFloat(res.info.avgRating) > 4)
        )
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const result = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const data = await result.json();
        // console.log(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurants(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfRestaurants.length === 0) {
        return (
            <div className='shimmer-body'>
                <div className='shimmer-search'><button>Search</button></div>
                <div className='shimmer-res-container'>
                    <Shimmer/>
                </div>
            </div>
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