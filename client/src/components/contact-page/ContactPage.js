import React from 'react'
import { motion } from "framer-motion";
import Nav from '../Nav';
import ContactInfo from './ContactInfo';
import AboutInfo from './AboutInfo';
import CantactForm from './ContactForm';
import ContactHero from './ContactHero';
import {contactPage} from '../../constants/constants';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {pageTransition} from '../../constants/constants'

export default function ContactPage (props) {
    const {name, mail, image, phone} = contactPage.contactInfo
    const {firstSection, secondSection, infoImage} = contactPage.aboutInfo
    return (
        <motion.div initial='out' animate='in' exit='out' variant={pageTransition} className='contact-page'>
            <Nav />
            <ContactHero image={contactPage.contactHero} />
            <Container>
                <Row>
                    <ContactInfo name={name} mail={mail} image={image} phone={phone} />
                    <CantactForm />
                </Row>
            </Container>
        </motion.div>
    )
} 