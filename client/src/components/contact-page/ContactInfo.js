import React from 'react';
import $ from 'jquery';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ContactInfo (props) {
    $('#copy-button').click(function(){

        var text = $("#email-adress").get(0)
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    })
    return (
        <Col className='contact-info' sm='12' md='6' lg='4'>
            <img src={props.image} className='contact-info__image' alt='Bilde av Magne Hoftun' />
            <h3 className='contact-info__name'>{props.name}</h3>
            <Row>
                <Col >
                    <p className='contact-info__mail'><span className='contact-info__mail--bold'>Email:</span><span id='email-adress'>{props.mail}</span><div id='copy-button' className='contact-info__copy'></div></p>
                </Col>
            </Row>
            <p className='contact-info__phone'><span className='contact-info__phone--bold'>Telefon:</span> {props.phone}</p>
        </Col>
    )
}