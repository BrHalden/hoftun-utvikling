import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import $ from 'jquery';

import ImgCarousel from './ImgCarousel';
import DisplayInfo from './DisplayInfo';

import cabinIcon from  '../../images/icons/cabin-icon-blue.svg';


export default function ListCabins (props) {
    $(document).bind('keydown', function(event) {
        if (event.which === 38) {
            prevCabin()
            console.log(currentCabin + ' from switchCabin, from: ' + event.key)
        } else if (event.which === 40) {
            nextCabin()
        }
    });
    let counter = 0;
    let cabinList = [];
    const [currentCabin, setCurrentCabin] = useState(0);
    const [cabins, setCabins] = useState([]);
    useEffect(() => {
        fetch('/api/cabins')
            .then(response => response.json())
            .then(json => {
                setCabins(json);
            })
            .catch(error => console.log(error));
    }, []);
    function nextCabin () {
        if (currentCabin === cabins.length - 1) {
            $('.cabin__container--current').addClass('cabin__container--hidden').removeClass('cabin__container--current');
            $('.cabin__container--hidden').first().addClass('cabin__container--current').removeClass('cabin__container--hidden');
            setCurrentCabin(currentCabin - currentCabin);
        } else {
            $('.cabin__container--current').next().addClass('cabin__container--current').removeClass('cabin__container--hidden').prev().removeClass('cabin__container--current').addClass('cabin__container--hidden');
            setCurrentCabin(currentCabin + 1)
            console.log(currentCabin);
        }
    }
    function prevCabin () {
        if (currentCabin === 0) {
            $('.cabin__container--current').addClass('cabin__container--hidden').removeClass('cabin__container--current');
            $('.cabin__container--hidden').last().addClass('cabin__container--current').removeClass('cabin__container--hidden');
            setCurrentCabin(cabins.length -1);
        } else {
            $('.cabin__container--current').prev().addClass('cabin__container--current').removeClass('cabin__container--hidden').next().removeClass('cabin__container--current').addClass('cabin__container--hidden');
            setCurrentCabin(currentCabin - 1)
        }
    }
    return (
        <div className='cabin'>
            {
                cabins.map(cabin => {
                    counter++;
                    cabinList.push(cabin);
                    console.log(cabinList);
                    cabin.images= [cabin.img1, cabin.img2, cabin.img3];
                    const {
                        name, description, id, 
                        totalPrice, askingPrice, expenses, 
                        primaryRoomArea, liveableArea, grossArea,
                        aditionalInfo,
                        img1, img2, img3, images,
                        createdOn
                    } = cabin;
                    if (cabinList.length === 1) {
                        return (
                            <div key={id} id={'cabin' + counter} className='cabin__container cabin__container--current'>
                                <Row className='cabin__row' style={{marginLeft: 0}}>
                                    <ImgCarousel images={images} className='cabin__image-container'>
                                        <div className='cabin__cab-nav cabin__nav-button-container cabin__nav-button-container--cabin'>
                                            <span>
                                                <div onClick={() => {prevCabin()}} className='cabin__nav-button cabin__cab-nav-button cabin__cab-nav-button--prev'></div>
                                            </span>
                                            <div onClick={() => {nextCabin()}} style={{backgroundImage: `url(${cabinIcon})`}} className='cabin__nav-icon'></div>
                                            <div className='cabin__nav-counter cabin__nav-counter--cab'>{counter}/3</div>
                                             <span>
                                                <div onClick={() => {nextCabin()}} className='cabin__nav-button cabin__cab-nav-button cabin__cab-nav-button--next'></div>
                                            </span>
                                            
                                        </div>
                                    </ImgCarousel>
                                    <DisplayInfo 
                                        name={name} description={description} id={id}
                                        totalPrice={totalPrice} askingPrice={askingPrice} expenses={expenses}
                                        primaryRoomArea={primaryRoomArea} liveableArea={liveableArea} grossArea={grossArea}
                                        aditionalInfo={aditionalInfo}
                                        img1={img1} img2={img2} img3={img3}
                                        createdOn={createdOn}
                                        className='cabin__info-container'
                                    />
                                </Row>
                            </div>
                        )
                    } else {
                        return (
                            <div key={id} id={'cabin' + counter} className='cabin__container cabin__container--hidden'>
                                <Row className='cabin__row' style={{marginLeft: 0}}>
                                    <ImgCarousel images={images}>
                                        <div className='cabin__cab-nav'>
                                            <span>
                                                <div onClick={() => {prevCabin()}} className='cabin__nav-button cabin__cab-nav-button cabin__cab-nav-button--prev'></div>
                                            </span>
                                            <div onClick={() => {nextCabin()}} style={{backgroundImage: `url(${cabinIcon})`}} className='cabin__nav-icon'></div>
                                            <div className='cabin__nav-counter cabin__nav-counter--cab'>{counter}/3</div>
                                            <span>
                                                <div onClick={() => {nextCabin()}} className='cabin__nav-button cabin__cab-nav-button cabin__cab-nav-button--next'></div>
                                            </span>
                                        </div>
                                    </ImgCarousel>
                                    <DisplayInfo 
                                        name={name} description={description} id={id}
                                        totalPrice={totalPrice} askingPrice={askingPrice} expenses={expenses}
                                        primaryRoomArea={primaryRoomArea} liveableArea={liveableArea} grossArea={grossArea}
                                        aditionalInfo={aditionalInfo}
                                        img1={img1} img2={img2} img3={img3}
                                        createdOn={createdOn}
                                        className='cabin__info-container'
                                    />
                                </Row>
                            </div>
                        )
                    }

                        
                })
            }
            {console.log(currentCabin)}
        </div>
    )
}