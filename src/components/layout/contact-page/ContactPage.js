import React from 'react';
import Nav from '../../Nav';
import ContactInfo from './ContactInfo';
import AboutInfo from './AboutInfo';
import CantactForm from './ContactForm';

export default function ContactPage (props) {
    return (
        <>
            <Nav />
            <p>Hello from ContactPage</p>
            <ContactInfo />
            <AboutInfo />
            <CantactForm />
        </>
    )
}