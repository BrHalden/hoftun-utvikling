import React from 'react';
import Col from 'react-bootstrap/Col';

export default function ContactInfo (props) {
    return (
        <Col className='contact-info' sm='12' md='6' lg='4'>
            <img src={props.image} className='contact-info__image' alt='Bilde av Magne Hoftun' />
            <h3 className='contact-info__name'>{props.name}</h3>
            <p className='contact-info__mail'><span className='contact-info__mail--bold'>Email:</span> {props.mail}</p>
            <p className='contact-info__phone'><span className='contact-info__phone--bold'>Telefon:</span> {props.phone}</p>
        </Col>
    )
}