import React from 'react'
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import ImgNav from './ImgNav';
import CabNav from './CabNav';


export default function ImgCarousel (props) {
    console.log(props.images)
    console.log($('#cabin-1'));
    $('#cabin-1').addClass('background-red');
    let cabin = document.getElementById('cabin-1')
    cabin.setAttribute('class', 'backround-red')

    return (
        <Col lg='8' md='8'>
            <img src={props.images[0]} width='100%' />
            <ImgNav />
            <CabNav />
        </Col>
    )
}