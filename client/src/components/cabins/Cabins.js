import React from 'react';
import { motion } from "framer-motion";
import Nav from '../Nav'
import ListCabins from './ListCabins';
import { pageVariants, pageTransition } from '../../constants/constants'

export default function Cabins (props) {
    return (
        <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition}className='animation__container'>
            <Nav />
            <ListCabins />
        </motion.div>
    )   
}