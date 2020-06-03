import React from 'react';
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../Button'

export default function DisplayInfo (props) {
    return (
        <Col className='info' lg='4' md='4'>
            <h3 className='info__header'>{props.name}</h3>
            <p className='info__intro'>{props.description}</p>
            <Container>
                <Row className='info__value-container'>
                    <Col className='info__value-section' lg='6' md='6'>
                        <p className='info__sub-header'>Prisantydning:</p>
                        <p>{props.askingPrice} kr</p>
                        <p className='info__sub-header'>Omkostninger:</p>
                        <p>{props.expenses} kr</p>
                        <p className='info__sub-header'>Totalpris:</p>
                        <p>{props.totalPrice} kr</p>
                    </Col>
                    <Col className='info__value-section' lg='6' md='6'>
                        <p className='info__sub-header'>Primærrom:</p>
                        <p >{props.primaryRoomArea} m<sup>2</sup></p>
                        <p className='info__sub-header'>Bruksareal:</p>
                        <p>{props.liveableArea} m<sup>2</sup></p>
                        <p className='info__sub-header'>Bruttoareal:</p>
                        <p>{props.grossArea} m<sup>2</sup></p>
                    </Col>
                </Row>
            </Container>
            <div className='info__text-container'>
                <h5 className='info__sub-header info__text-header'>Hytte Beskrievlse</h5>
                <p className='info__more-info'>{props.aditionalInfo}</p>
            </div>
            <div className='info__button-container'>
                <Button>
                    <Link to='/ContactPage'>
                        <span>Ta Kontakt</span>
                    </Link>
                </Button>
            </div>
        </Col>
    )
}