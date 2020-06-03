import React from 'react';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function AdminNav (props)  {
    return (
        <div className='admin__nav'>
            <Row>
                <Col>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div className='admin__nav-button'>
                            <p>HJEM</p>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/admin/PostCabin' style={{ textDecoration: 'none' }} >
                        <div className='admin__nav-button'>
                            <p>LEGG TIL NY HYTTE</p>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/admin/CabinManage' style={{ textDecoration: 'none' }}>
                        <div className='admin__nav-button'>
                            <p>SE HYTTE OVERSIKT</p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}