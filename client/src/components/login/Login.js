import React from 'react';
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import Nav from '../Nav';
import Admin from '../admin/Admin';
import {pageTransition} from '../../constants/constants'

export default function Login (props) {
    return(
        <motion.div initial='out' animate='in' exit='out' variant={pageTransition}>
            <Nav />
            <p>Hello from Login</p>
            <Link to='/Admin'>
                <span>Login</span>
            </Link>
        </motion.div>
    )
}