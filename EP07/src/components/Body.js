import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const filterFood = () => {
        setFilteredRestaurants(
            listOfRestaurants.filter(res => parseFloat(res.info.avgRating) > 4)
        )
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const result = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const data = await result.json();

        let apiData = data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(apiData)
        setFilteredRestaurants(apiData)
    }

    // Conditional Rendering

    return listOfRestaurants.length === 0 ? (//conditional rendering
        <div className='shimmer-body'>
            <div className='shimmer-search'><button>Search</button></div>
            <div className='shimmer-res-container'>
                <Shimmer/>
            </div>
        </div>
    ) : (
        <div className='body'>
            <div className='search'>
                <input className='search-input' type='text' onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
                <button onClick={
                    () => setFilteredRestaurants(
                        listOfRestaurants.filter(res => (res.info.name).toLowerCase().includes(searchText.toLocaleLowerCase()))
                    )
                }>Search</button>
                <button onClick={filterFood}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurants.map((restaurant) => <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)
                }
            </div>
        </div>
    );
}

export default Body;