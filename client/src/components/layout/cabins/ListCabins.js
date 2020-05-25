import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import ImgCarousel from './ImgCarousel';
import DisplayInfo from './DisplayInfo';
import CabNav from './CabNav';


export default function ListCabins (props) {
    let counter = 0;
    const [currentCabin, setCurrentCabin] = useState(0);
    const [cabins, setCabins] = useState([]);
    useEffect(() => {
        fetch('/cabins')
            .then(response => response.json())
            .then(json => {
                setCabins(json);
            })
            .catch(error => console.log(error)); 
    }, []);

    return (
        <div>
            {
                cabins.map(cabin => {
                    counter++;
                    cabin.images= [cabin.img1, cabin.img2, cabin.img3];
                    const {
                        name, description, id, 
                        totalPrice, askingPrice, expenses, 
                        primaryRoomArea, liveableArea, grossArea,
                        aditionalInfo,
                        img1, img2, img3, images,
                        createdOn
                    } = cabin;
                    return (
                        <div key={id} id={'cabin' + counter}>
                            <Row>
                                <ImgCarousel images={images}>
                                    <CabNav />
                                </ImgCarousel>
                                <DisplayInfo 
                                    name={name} description={description} id={id}
                                    totalPrice={totalPrice} askingPrice={askingPrice} expenses={expenses}
                                    primaryRoomArea={primaryRoomArea} liveableArea={liveableArea} grossArea={grossArea}
                                    aditionalInfo={aditionalInfo}
                                    img1={img1} img1={img2} img3={img3}
                                    createdOn={createdOn}
                                />
                            </Row>
                        </div>
                    )
                })
            }
        </div>
    )
}