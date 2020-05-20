import React from 'react';
import Nav from '../../Nav';
import ContactInfo from './ContactInfo';
import AboutInfo from './AboutInfo';
import CantactForm from './ContactForm';
import ContactHero from './ContactHero';
import {contactPage} from '../../../constants/constants';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function ContactPage (props) {
    const {name, mail, image, phone} = contactPage.contactInfo
    const {firstSection, secondSection, infoImage} = contactPage.aboutInfo
    return (
        <div className='contact-page'>
            <Nav />
            <ContactHero image={contactPage.contactHero} />
            <Container>
                <Row>
                    <ContactInfo name={name} mail={mail} image={image} phone={phone} />
                    <CantactForm />
                    <AboutInfo first={firstSection} second={secondSection} image={infoImage}/>
                </Row>
            </Container>
        </div>
    )
}