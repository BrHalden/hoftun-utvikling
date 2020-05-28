import React from 'react';
import {Link} from "react-router-dom";
import listIcon from '../images/icons/list-icon.svg';
import ProfileIcon from '../images/icons/profile-icon.svg';
import loginIcon from '../images/icons/login-icon.svg';
import navBg from '../images/nav-bg.svg';

export default function Nav(props) {
    return (
        <div className='nav' style={{backgroundImage: `url(${navBg})`}}>
            <Link to='/' className='nav__brand'>
                <span className='nav__brand'>hoftun utvikling</span>
            </Link>
            <Link to='/Cabins'>
                <img 
                    src={listIcon}
                    className='nav__icon'
                    alt='List icon'
                />
            </Link>
            <Link to='/ContactPage'>
                <img 
                    src={ProfileIcon} 
                    className='nav__icon' 
                    alt='Profile icon' 
                />
            </Link>
            <Link to='/Login'>
                <img 
                    src={loginIcon} 
                    className='nav__icon' 
                    alt='Login icon' 
                />
            </Link>
        </div>
    )
}