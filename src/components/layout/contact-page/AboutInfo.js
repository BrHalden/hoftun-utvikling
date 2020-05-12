import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutInfo (props) {
    return (
        <Col className='about-info' sm='12' md='12' lg='12'>
            <h3>Om oss</h3>
            <Row>    
                <Col>
                    <p>{props.second}</p>
                </Col>
                <Col>
                    <p>{props.second}</p>
                </Col>
                <Col>
                    <p>{props.second}</p>
                </Col>
                <img src={props.image} className='about-info__image' alt='Oversiktsbilde av hytte' />
            </Row>
        </Col>
    )
}