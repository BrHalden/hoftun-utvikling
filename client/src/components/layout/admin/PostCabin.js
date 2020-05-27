import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from '../../Button';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const cabinSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    askingPrice: yup.number().required(),
    expenses: yup.number(),
    totalPrice: yup.number(),
    liveableArea: yup.number().required(),
    primaryRoomArea: yup.number(),
    grossArea: yup.number(),
    aditionalInfo: yup.string(),
    images: yup.array()
        .compact()
        .cast(['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12', 'img13', 'img14']),
    createdOn: yup.date().default(function(){
        return new Date();
    })
});

export default function PostCabin (props) {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: cabinSchema
    });

    function onSubmit(data) {
        console.log("data", data);
        const options = {
            method: 'POST',
            headers : {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)   
        }
        fetch('/cabins', options)
            .then(response => response.json())
            .then(res => {
            console.log(res);
        })
    }
    return(
        <div className='add-cabin'>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <Container>
                    <Row>
                        <h3 className='contact-form__header'>Legg til ny hytte</h3>
                        <Form.Group className='contact-form__item'>
                            <Form.Control name='name' type='text' placeholder='Hyttenavn' ref={register({ required: true })}/>
                            {errors.name && <p className="add-cabin__error">Hytten må ha ett navn, eventuelt overskrift istedet</p>}
                        </Form.Group>
                        <Form.Group className='contact-form__item'>
                            <Form.Control as='textarea' rows='3' name='description' type='text' placeholder='Hytte beskrivelse' ref={register({ required: true })}/>
                            {errors.description && <p className="add-cabin__error">Hytten trenger en beskrivlse, eventuelt en innledning eller infotekst</p>}
                        </Form.Group>
                        <Col lg='6' md='6' sm='12'>
                            <p>Priser: </p>
                            <Form.Group className='contact-form__item'>
                                <Form.Control name='askingPrice' type='number' placeholder='Prisantydning' ref={register({ required: true })}/>
                                {errors.askingPrice && <p className="add-cabin__error">Hytten trenger en pris</p>}
                            </Form.Group>
                            <Form.Group className='contact-form__item'>
                                <Form.Control name='expenses' type='number' placeholder='Omkostninger' ref={register({ required: true })}/>
                            </Form.Group>
                            <Form.Group className='contact-form__item'>
                                <Form.Control name='totalPrice' type='number' placeholder='Total pris' ref={register({ required: true })}/>
                            </Form.Group>
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <p>Mål: </p>
                            <Form.Group className='contact-form__item'>
                                <Form.Control name='liveableArea' type='number' placeholder='Bruksareal' ref={register({ required: true })}/>
                                {errors.liveableArea && <p className="add-cabin__error">Hytten må ha bruksareal</p>}
                            </Form.Group>
                            <Form.Group className='contact-form__item'>
                                <Form.Control name='primaryRoomArea' type='number' placeholder='Primærrom areal' ref={register({ required: true })}/>
                            </Form.Group>
                            <Form.Group className='contact-form__item'>
                                <Form.Control name='grossArea' type='number' placeholder='Bruttoareal' ref={register({ required: true })}/>
                            </Form.Group>
                        </Col>
                        <Form.Group className='contact-form__item'>
                            <Form.Control as='textarea' rows='3' name='aditionalInfo' type='text' placeholder='Tilleggsinfo' ref={register({ required: true })}/>
                        </Form.Group>
                            <Col>
                                <Form.Group className='contact-form__item'>
                                    <Form.Control name='img1' type='url' placeholder='Bilde URL' ref={register({ required: true })}/>
                                    {errors.img1 && <p className="add-cabin__error">Hytten må ha minst ett bilde</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className='contact-form__item'>
                                    <Form.Control name='img2' type='url' placeholder='Bilde URL' ref={register({ required: true })}/>
                                    {errors.img1 && <p className="add-cabin__error">Hytten må ha minst ett bilde</p>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className='contact-form__item'>
                                    <Form.Control className='' name='img3' type='url' placeholder='Bilde URL' ref={register({ required: true })}/>
                                </Form.Group>
                            </Col>
                        <Form.Group className='contact-form__item contact-form__item--submit'>
                            <Button type='submit'>
                                <span>Legg til hytte</span>
                            </Button>
                        </Form.Group>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}