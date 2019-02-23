import React from 'react';
import './Landingpage.css';
import SearchBar from './SearchBar';
import DrawerToggleButton from './DrawerToggleButton';
import SideBar from './SideBar';


const LandingPage = props => {

    return(
        <div >
            <header>
                <nav>
                    <div className="row">
                        <a href="#" className="title">
                            HOMR
                        </a>
                        <ul className="main-nav">
                            <li><a href="#">For Sale</a></li>
                            <li><a href="#">For Rent</a></li>
                            <li><a href="#">Blog</a></li>
                            <li>
                                <button><a>Sign Up/Login</a></button>
                            </li>
                        </ul>
                        <div>
                        <DrawerToggleButton click={props.drawerClickHandler}/>
                        </div>
                    </div>
                </nav>
                <div className="text-box">
                    <h1>
                        Helping You Find The Space You Need
                    </h1>
                    <p>Lorem ipsum dolor sit amet, id referrentur complectitur eam, <br/>
                        ei amet labore vim, denique dolores imperdiet mea ne.</p>
                    <SearchBar />
                </div>
            </header>

        </div>
    )

}

export default LandingPage;