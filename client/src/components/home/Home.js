import React from 'react';
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import Button from '../Button'
import Img from '../../images/org-size/hjem_head1.jpg';
import homeBanner from '../../images/home-banner.svg';
import { pageVariants, pageTransition } from '../../constants/constants';

export default function Home (props) {
    return (
        <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} className='home animation__container' style={{backgroundImage: `url(${Img})`}}>
            <div className='home__content' style={{backgroundImage: `url(${homeBanner})`}}>
                <h1 className='home__header'>hoftun utvikling</h1>
                <Button className='home__button'>
                    <Link to='/Cabins'>
                        <span>Hytter til Salgs</span>
                    </Link>
                </Button>
            </div>
        </motion.div>
    )
}