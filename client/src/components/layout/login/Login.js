import React from 'react';
import {Link} from "react-router-dom";
import Nav from '../../Nav';
import Admin from '../admin/Admin';

export default function Login (props) {
    return(
        <>
            <Nav />
            <p>Hello from Login</p>
            <Link to='/Admin'>
                <span>Login</span>
            </Link>
        </>
    )
}