import React from 'react';
import './News.css';



const News = ({ images }) => {

    return (
            <div className="news-card">
            <img src={images} alt="properties" />
            <div className="news-details">
                <h5 className="news-title">
                Lorem ipsum dolor sit amet an habeo 
                singulis indoctum nec.
                </h5>
                <p className="description">
                Lorem ipsum dolor sit amet an habeo 
                singulis indoctum nec. eum unum ancillae recteque et.
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default News;