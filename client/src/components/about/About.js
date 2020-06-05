import React from 'react';
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from '../Button'
import Nav from '../Nav'
import {contactPage} from '../../constants/constants';
import {pageTransition} from '../../constants/constants'
import AboutHero from './AboutHero';

export default function About (props) {
    const {firstSection, secondSection, infoImage} = contactPage.aboutInfo;
    return (
        <motion.div initial='out' animate='in' exit='out' variant={pageTransition} transition={{ duration: 4 }}>
            <Nav />
            <AboutHero image={infoImage}/>
            <Container className='about'>
                <h3 className='about__header'>Om oss</h3>
                <Row>    
                    <div className='about__text-container'>
                        <span className='about__text about__text--first'>{firstSection}</span><span className='about__text about__text--second'>{secondSection}</span>
                    </div>
                </Row>
                <div className='about__button-container'>
                    <Button>
                        <Link to='/ContactPage'>
                            <span>Ta Kontakt</span>
                        </Link>
                    </Button>
                </div>
            </Container>
        </motion.div>
    )
}