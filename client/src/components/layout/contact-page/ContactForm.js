import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from '../../Button';
import * as yup from "yup";
import $ from 'jquery';
import { useForm } from "react-hook-form";

const contactSchema = yup.object().shape({
	name: yup.string(),
    email: yup.string().email().required(''),
    subject: yup.string().min(1).required(''),
    text: yup.string().min(10).required('')
});

export default function ContactFrom (props) {
    function onSubmit(mail) {
        const options = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mail)
        };
        console.log(mail);
        fetch('/mail', options)
            .then(response => response.json())
            .then(res => {
            console.log(res);
        })
        console.log(mail.value)
        $('.contact-form__input').val('');
        $('.contact-form__accepted').removeClass('contact-form__hidden');
    }
    const { register, handleSubmit, errors } = useForm({
        validationSchema: contactSchema
    });
    
    

    return (
        <Col className='contact-form' sm='12' md='12' lg='8'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='contact-form__header'>Send en Melding</h3>
                <Row>
                    <Col>
                        <Form.Group className='contact-form__item'>
                            <Form.Label>Navn</Form.Label>
                            <Form.Control name='name' type='text' placeholder='' className='contact-form__input' ref={register()}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='contact-form__item'>
                            <Form.Label>E-Post<span className='contact-form__required'> *</span></Form.Label>
                            <Form.Control name='email' type='email' placeholder='' className='contact-form__input' ref={register({ required: true })}/>
                            {errors.email && <p className="contact-form__error">Legg ved en Epost for å komme i kontakt</p>}
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className='contact-form__item'>
                    <Form.Label>Emne<span className='contact-form__required'> *</span></Form.Label>
                    <Form.Control size='lg' name='subject' type='text' placeholder='' className='contact-form__input' ref={register({ required: true })}/>
                    {errors.subject && <p className="contact-form__error">Trenger ett emne for å sende meldingen</p>}
                </Form.Group>
                <Form.Group className='contact-form__item'>
                    <Form.Label>Melding<span className='contact-form__required'> *</span></Form.Label>
                    <Form.Control size='sm' rows='3' as='textarea' name='text' type='text' placeholder='' className='contact-form__input' ref={register({ required: true })}/>
                    {errors.message && <p className="contact-form__error">Meldingen må være minst 10 tegn lang</p>}
                </Form.Group>
                <Form.Group className='contact-form__item contact-form__item--submit'>
                    <p className="contact-form__hidden contact-form__accepted">Meldingen ble sendt</p>
                    <Button type='submit' value='Send'>
                        <span>Send Melding</span>
                    </Button>
                </Form.Group>
            </Form>
        </Col>
    )
}