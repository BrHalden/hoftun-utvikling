import React from 'react'
import { motion } from "framer-motion";
import Nav from '../Nav';
import ContactInfo from './ContactInfo';
import CantactForm from './ContactForm';
import ContactHero from './ContactHero';
import {contactPage} from '../../constants/constants';
import { Container, Row } from 'react-bootstrap';
import {pageVariants, pageTransition} from '../../constants/constants'

export default function ContactPage (props) {
    const {name, mail, image, phone} = contactPage.contactInfo
    return (
        <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition} className='contact-page animation__container'>
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