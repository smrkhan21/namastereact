import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { IMG_URL } from '../../utils/config';

const RestaurantCard = (props) => {
    const {resData} = props;
    const {info} = resData;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = info;
    return (
        <div className='res-card'>
            <div className='img-container'>
                <img className='res-image' src={IMG_URL + cloudinaryImageId}/>
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

export default RestaurantCard;