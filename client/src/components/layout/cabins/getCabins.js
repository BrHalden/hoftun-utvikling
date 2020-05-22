import React from 'react';

export default function getCabins (props) {
    fetch('/cabins')
        .then(response => response.json())
        .then(res => {
        console.log(res);
})
}