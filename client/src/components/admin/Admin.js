import React from 'react';
import {Link} from "react-router-dom";
import { Switch,Route, } from "react-router-dom";
import PostCabin from './PostCabin';
import AdminNav from './AdminNav'
import CabinManage from './CabinManage';
import {pageTransition} from '../../constants/constants'
import { motion } from "framer-motion";




export default function Admin (props) {
    return (
      <motion.div initial='out' animate='in' exit='out' variant={pageTransition} className='admin'>
        <AdminNav />
        <Switch>
            <Route path='/Admin/CabinManage' component={CabinManage} />
            <Route path='/Admin/PostCabin' component={PostCabin} />
        </Switch>   
      </motion.div>
    )
}