import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ImgNav from './ImgNav';
import arrowRight from '../../images/icons/arrow-right.svg';
import arrowLeft from '../../images/icons/arrow-left.svg';


export default function ImgCarousel (props) {
    const [cabinImg, setCabinImg] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    
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
        <Col lg='8' md='8' className='cabin__col cabin__img-col'>
            <Image className='cabin__image' src={props.images[cabinImg]} fluid />
                {props.children}
                <div className='cabin__img-nav'>
                    <div className='cabin__nav-button-container cabin__nav-button-container--image'>
                    <span>
                        <div onClick={() => {prevImage()}} className='cabin__nav-button cabin__img-nav-button' style={{backgroundImage: `url(${arrowLeft})`}}></div>
                    </span>
                    <span>
                        <div onClick={() => {nextImage()}} className='cabin__nav-button cabin__img-nav-button' style={{backgroundImage: `url(${arrowRight})`}}></div>
                    </span>
                </div>
            </div>
            {console.log(cabinImg)}
        </Col>
    )
}