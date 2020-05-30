import React from 'react';
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../Button'

export default function DisplayInfo (props) {
    return (
        <Col className='info' lg='4' md='4'>
            <h1>{props.name}</h1>
            <p><b>{props.description}</b></p>
            <Row>
                <Col>
                    <h4>Priser: </h4>
                    <p className='info__sub-header'>Prisantydning:</p>
                    <p>{props.askingPrice} kr</p>
                    <p className='info__sub-header'>Omkostninger:</p>
                    <p>{props.expenses} kr</p>
                    <p className='info__sub-header'>Totalpris:</p>
                    <p>{props.totalPrice} kr</p>
                </Col>
                <Col>
                    <h4>Mål: </h4>
                    <p className='info__sub-header'>Primærrom:</p>
                    <p >{props.primaryRoomArea} m<sup>2</sup></p>
                    <p className='info__sub-header'>Bruksareal:</p>
                    <p>{props.liveableArea} m<sup>2</sup></p>
                    <p className='info__sub-header'>Bruttoareal:</p>
                    <p>{props.grossArea} m<sup>2</sup></p>
                </Col>
            </Row>
            <p className='info__more-info'>{props.aditionalInfo}</p>
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