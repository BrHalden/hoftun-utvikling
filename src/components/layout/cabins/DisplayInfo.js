import React from 'react';
import {Link} from "react-router-dom";
import Button from '../../Button'

export default function DisplayInfo (props) {
    return (
        <>
            <Button>
                <Link to='/ContactPage'>
                    <span>Ta Kontakt</span>
                </Link>
            </Button>
        </>
    )
}