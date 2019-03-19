import React from 'react';
import './SideBar.css';

const sideBar = props => {
    let drawerClasses = "side-bar";

    if (props.show) {
        drawerClasses = "side-bar open";
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="#">SignUp</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">For Sale</a></li>
            <li><a href="#">For Rent</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    </nav>
    )
    };

export default sideBar;