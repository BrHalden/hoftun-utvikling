import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from '../../Button'
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
	fullName: yup.string().min(2).required("Name is"),
    email: yup.string().email().required("Valid Email is required"),
    message: yup.string().min(10).required("Message must be 10 or more characters long"),
});

export default function ContactFrom (props) {
    return (
        <Col className='contact-form' sm='12' md='12' lg='8'>
            <Form>
                <h3 className='contact-form__header'>Send en Melding</h3>
                <Form.Group className='contact-form__item'>
                    <Form.Control name='name' type='text' placeholder='Navn...' />
                </Form.Group>
                <Form.Group className='contact-form__item'>
                    <Form.Control name='email' type='email' placeholder='epost...' />
                </Form.Group>
                <Form.Group className='contact-form__item'>
                    <Form.Control as='textarea' name='message' type='text' placeholder='Melding...' />
                </Form.Group>
                <Form.Group className='contact-form__item contact-form__item--submit'>
                    <Button>
                        <span>Send Melding</span>
                    </Button>
                </Form.Group>
            </Form>
        </Col>
    )
}