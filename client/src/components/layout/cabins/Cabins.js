import React from 'react';
import { motion } from "framer-motion";
import Nav from '../../Nav'
import ListCabins from './ListCabins';
import {pageTransition} from '../../../constants/constants'

export default function Cabins (props) {
    return (
        <motion.div initial='out' animate='in' exit='out' variant={pageTransition}>
            <Nav />
            <ListCabins />
        </motion.div>
    )   
}