import React from 'react';
import './Footer.css';


const Footer = () => {
    
    return(
            <div>
                <footer>
                    <h3 className="offers">Special Hotel Deals and Offers</h3>
                    <p className="contact">Enter your email Address to receive secret hotel deals</p>
                    <form>
                        <input placeholder="Enter Your Email Address" className="subscribe"/>
                        <button>Subscribe</button>
                    </form>
                </footer>
            </div>
    )
}

export default Footer;