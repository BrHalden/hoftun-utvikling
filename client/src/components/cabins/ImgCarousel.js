import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function ImgCarousel (props) {
    const [cabinImg, setCabinImg] = useState(0);
    
    function nextImage () {
        if (props.images.length - 1 === cabinImg) {
            setCabinImg(cabinImg - cabinImg);
        }
         else {
            setCabinImg(cabinImg + 1);
        }
        
    }
    function prevImage () {
        if (cabinImg === 0 ) {
            setCabinImg(props.images.length - 1);
        } else {
            setCabinImg(cabinImg - 1);
        }
    }
        //sett inn imgNav i  return 
    return (
        <Col lg='8' md='12' sm='12' className='cabin__col cabin__img-col' style={{paddingLeft: 0}}>
            <Image className='cabin__image' src={props.images[cabinImg]} fluid />
                {props.children}
                <div className='cabin__img-nav'>
                    <div className='cabin__nav-button-container cabin__nav-button-container--image'>
                    <span>
                        <div onClick={() => {prevImage()}} className='cabin__nav-button cabin__img-nav-button cabin__img-nav-button--prev'></div>
                    </span>
                    <span className='cabin__nav-counter cabin__nav-counter--img'>{cabinImg + 1}/3</span>
                    <span>
                        <div onClick={() => {nextImage()}} className='cabin__nav-button cabin__img-nav-button cabin__img-nav-button--next'></div>
                    </span>
                </div>
            </div>
        </Col>
    )
}