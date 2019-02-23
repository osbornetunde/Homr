import React from 'react';
import './detailspage.css';
import lagos from '../img/lagos.png';
import kaduna from '../img/kaduna.png';
import abuja from '../img/abuja.png';
import kebbi from '../img/kebbi.png';
import rivers from '../img/rivers.png';
import Card from './Card';
import apartment1 from '../img/apartment1.png';
import apartment2 from '../img/apartment2.png';
import apartment3 from '../img/apartment3.png';
import apartment4 from '../img/apartment4.png';
import apartment5 from '../img/apartment5.png';
import apartment6 from '../img/apartment6.png';
import Person from '../img/person.png';
import Testimonials from './Testimonials';
import News from './News';


const apartments = [apartment1, apartment2, apartment3, apartment4, apartment5, apartment6]

const DetailsPage = props => {

    return (
        <div >
            <section>
                <div className="states" onClick={props.change}>
                    <div  className="stat state1" onClick={props.change}>
                        <img src={lagos} className="Lagos"/>
                        <div className="lagos">Lagos</div>
                    </div>
                    <div  className="stat state2" onClick={props.change}>
                        <img src={kaduna} className="Kaduna"/>
                        <div className="kaduna">kaduna</div>
                    </div>
                    <div  className="stat state3" onClick={props.change}>
                        <img src={abuja}  className="Abuja"/>
                        <div className="abuja">Abuja</div>
                    </div>
                    <div  className="stat state4" onClick={props.change}>
                        <img src={rivers} className="Rivers" />
                        <div className="rivers">Rivers</div>
                    </div>
                    <div  className="stat state5" onClick={props.change}>
                        <img src={kebbi} className="Kebbi"/>
                        <div className="kebbi">Kebbi</div>
                    </div>
                </div>
                <div className="properties">
                    <h2>Featured Properties in <span>{props.value}</span></h2>
                    <div className="card-grid">
                        <Card images={apartments}/>
                    </div>
                </div>
                <div>
                <h3 className="about">What They Say About <span>Us</span></h3>
                    <div className="card-rows">
                        <Testimonials Persons={Person}/>
                        <Testimonials Persons={Person}/>
                        <Testimonials Persons={Person}/>
                    </div>
                </div>
            </section>
            <div className="news-rows">
                    <h3 className="news">Lastest News From <span>Us</span></h3>
                        <div className="news-row">
                            <News images={apartment3}/>
                            <News images={apartment2}/>
                            <News images={apartment4}/>
                        </div>
            </div>
        </div>

    )
}

export default DetailsPage;