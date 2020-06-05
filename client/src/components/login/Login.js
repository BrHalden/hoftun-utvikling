import React from 'react';
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import {Col, Row, Container, Form } from 'react-bootstrap'
import Nav from '../Nav';
import {pageTransition} from '../../constants/constants'
import Button from '../Button'

export default function Login (props) {
    return(
        <motion.div initial='out' animate='in' exit='out' variant={pageTransition} className='login'>
            <Nav />
            <Container className='login__container'>
                <Row className='login__row'>
                    <Col sm='6' md='3' lg='3' className='login__col'>     
                        <h3>Innloggning</h3>
                        <Form>
                            <Form.Group className='login__form-item'>
                                <Form.Control placeholder='mail-adresse@mail.no' readOnly />
                            </Form.Group>
                            <Form.Group className='login__form-item'>
                                <Form.Control placeholder='************' readOnly />
                            </Form.Group>
                            <Link to='/Admin' className='login__button'>
                                <Button >Logg inn</Button>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}