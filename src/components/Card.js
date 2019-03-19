import React from 'react';
import './Card.css';
import { SimpleImg } from 'react-simple-img';
import restroom from '../img/restroom.png';
import bathtub from '../img/bathtub.png';
import bed from '../img/bed.png';


const Card = ({ images }) => {

    return (
        images.map( (image, index) => {
            return(<div key={index} className="card">
            <SimpleImg  className="img" src={image} alt="properties" style={{'height': '5%'}}/>
            <div className="value">
                <p className="price">{'$3,500'}</p>
                <button>View Property</button>
            </div>
            <p className="location">Lekki, Lagos</p>
            <div className="icons">
                <span><img src={bed} alt="bed"/> 5 Beds</span>
                <span><img src={bathtub} alt="battub"/> 5 Baths</span>
                <span><img src={restroom} alt="restroom"/> 5 Toilets</span>
            </div>
        </div>
            )
        })
        
    )
}

export default Card;