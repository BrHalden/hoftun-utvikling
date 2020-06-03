import React from 'react';
import {Link} from "react-router-dom";
import listIcon from '../images/icons/list-icon.svg';
import ProfileIcon from '../images/icons/profile-icon.svg';
import aboutIcon from '../images/icons/about-icon.svg';
import loginIcon from '../images/icons/login-icon.svg';
import navBg from '../images/nav-bg.svg';

export default function Nav(props) {
    return (
        <div className='nav' style={{backgroundImage: `url(${navBg})`}}>
            <Link to='/' className='nav__brand'>
                <span className='nav__brand'>hoftun utvikling</span>
            </Link>
            <Link to='/Cabins'>
                <div className='nav__icon nav__icon--list'></div>
            </Link>
            <Link to='/ContactPage'>
                <div className='nav__icon nav__icon--contact'></div>
            </Link>
            <Link to='/About'>
                <div className='nav__icon nav__icon--about'></div>
            </Link>
            <Link to='/Login'>
                <div className='nav__icon nav__icon--login'></div>
            </Link>
        </div>
    )
}