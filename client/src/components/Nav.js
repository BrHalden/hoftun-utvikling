import React from 'react';
import {Link} from "react-router-dom";

export default function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/' className='nav__brand-container' style={{ textDecoration: 'none' }}>
                <span className='nav__brand'>hoftun utvikling</span>
            </Link>
            <Link to='/Cabins' style={{ textDecoration: 'none' }}>
                <div className='nav__icon nav__icon--list'></div>
            </Link>
            <Link to='/ContactPage' style={{ textDecoration: 'none' }}>
                <div className='nav__icon nav__icon--contact'></div>
            </Link>
            <Link to='/About' style={{ textDecoration: 'none' }}>
                <div className='nav__icon nav__icon--about'></div>
            </Link>
            <Link to='/Login' style={{ textDecoration: 'none' }}>
                <div className='nav__icon nav__icon--login'></div>
            </Link>
        </div>
    )
}