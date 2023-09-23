import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - CardContainer
 *      - Card
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const restaurantObjects = [
    {
      "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "deliveryTime": 33
      }
    },
    {
      "info": {
        "id": "65797",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "r4ufflqojich0r29efvc",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "avgRating": 4.3,
        "deliveryTime": 32
      }
    },
    {
      "info": {
        "id": "506322",
        "name": "Louis Burger",
        "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
        "locality": "2nd stage domlur",
        "areaName": "Indiranagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food"
        ],
        "avgRating": 4.2,
        "deliveryTime": 34
      }
    },
    {
      "info": {
        "id": "43836",
        "name": "McDonald's",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "locality": "MG Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.2,
        "deliveryTime": 24
      }
    },
    {
      "info": {
        "id": "10583",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Frazer Town",
        "areaName": "Frazer Town",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.9,
        "deliveryTime": 39
      }
    },
    {
      "info": {
        "id": "341895",
        "name": "Burger Seigneur",
        "cloudinaryImageId": "k4z46joj5ozirqpyww1z",
        "locality": "Indiranagar",
        "areaName": "Indiranagar",
        "costForTwo": "₹1300 for two",
        "cuisines": [
          "American",
          "Continental",
          "Burgers",
          "Beverages"
        ],
        "avgRating": 4.3,
        "deliveryTime": 35
      }
    },
    {
      "info": {
        "id": "314691",
        "name": "Momoz",
        "cloudinaryImageId": "ktiphhoyhayzyrxxxyy6",
        "locality": "Ganganagar",
        "areaName": "RT Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Malaysian"
        ],
        "avgRating": 3.9,
        "deliveryTime": 33
      }
    },
    {
      "info": {
        "id": "402710",
        "name": "WarmOven Cake & Desserts",
        "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
        "locality": "Millars Road",
        "areaName": "Vasanth Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 3.8,
        "deliveryTime": 34
      }
    },
    {
      "info": {
        "id": "402714",
        "name": "Indiana Burgers",
        "cloudinaryImageId": "lflq8ulpskdypnl2gbak",
        "locality": "Millars Road",
        "areaName": "Vasanth Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3.8,
        "deliveryTime": 33
      }
    },
    {
      "info": {
        "id": "320252",
        "name": "Social",
        "cloudinaryImageId": "zcjvolihd1vhx9g8ymsj",
        "locality": "Begur Hobli",
        "areaName": "Bommanahalli",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Fast Food",
          "Biryani",
          "Pizzas",
          "Salads",
          "Kebabs",
          "Juices",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "deliveryTime": 35
      }
    },
    {
      "info": {
        "id": "215852",
        "name": "Third Wave Coffee",
        "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
        "locality": "HAL 2nd Stage",
        "areaName": "Indiranagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Bakery",
          "Continental"
        ],
        "avgRating": 4.4,
        "deliveryTime": 33
      }
    },
    {
      "info": {
        "id": "395202",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "rqdtdkc3iqzxodv6vtyf",
        "locality": "Kasturba Road",
        "areaName": "MG Road",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 3.9,
        "deliveryTime": 34
      }
    },
    {
      "info": {
        "id": "448216",
        "name": "Momo Zone - The Momo Company",
        "cloudinaryImageId": "hi85rwc7kdc9pqomvdzv",
        "locality": "CMH Road",
        "areaName": "Indiranagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Fast Food"
        ],
        "avgRating": 4,
        "deliveryTime": 35
      }
    },
    {
      "info": {
        "id": "409923",
        "name": "Kaati Zone Rolls & Wraps",
        "cloudinaryImageId": "cv0ebvdyhlxscaz5czpe",
        "locality": "Millars Road",
        "areaName": "Vasanth Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Fast Food",
          "Bengali",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3.6,
        "deliveryTime": 33
      }
    },
    {
      "info": {
        "id": "30531",
        "name": "Hotel Empire",
        "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
        "locality": "Brigade Road",
        "areaName": "Church Street",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "avgRating": 4.3,
        "deliveryTime": 28
      }
    },
    {
      "info": {
        "id": "403197",
        "name": "The Dessert Zone",
        "cloudinaryImageId": "c447c9ce7d0bbe78e46141e866236762",
        "locality": "Millars Road",
        "areaName": "Vasanth Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 3.8,
        "deliveryTime": 31
      },
    },
    {
      "info": {
        "id": "60660",
        "name": "Cupcake Bliss Cake & Desserts",
        "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
        "locality": "2nd stage",
        "areaName": "Indiranagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4,
        "deliveryTime": 34,
      },
    },
    {
      "info": {
        "id": "93497",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Rashtriya Vidyalaya Rd",
        "areaName": "Jayanagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "deliveryTime": 27
      },
    },
    {
      "info": {
        "id": "347868",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Cunnigham road",
        "areaName": "Vasanth Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 3.8,
        "deliveryTime": 33
    }
    },
    {
      "info": {
        "id": "23846",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "aadw5xxrjtv6xxhtscai",
        "locality": "Rehinus Street",
        "areaName": "Richmond Town",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.2,
        "deliveryTime": 30
    }
}
  ];
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {info} = resData;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = info;
    return (
        <div className='res-card'>
            <div className='img-container'>
                <img className='res-image' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId}/>
            </div>
            <div className='content'>
                <h3 className='title'>{name}</h3>
                <i className="fas fa-star"></i>
                <p>{avgRating} <FontAwesomeIcon icon={faStar} /></p>
                <p>{cuisines.join(", ")}</p>
                <p><strong>{costForTwo}</strong></p>
                <p><strong>{deliveryTime + " Minutes"}</strong></p>
            </div>
        </div>
    );
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <input className='search-input' type='text'/>
                <button>Search</button>
            </div>
            <div className='res-container'>
                {
                    restaurantObjects.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)