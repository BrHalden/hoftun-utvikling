import React from 'react';

export default function Button (props) {
    return (
        <button style={{ border: 0 }} className='button'>
            {props.children}
        </button>
    )
}