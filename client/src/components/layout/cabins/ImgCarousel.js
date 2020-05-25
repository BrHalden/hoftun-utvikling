import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import ImgNav from './ImgNav';
import arrowRight from '../../../images/icons/arrow-right.svg';
import arrowLeft from '../../../images/icons/arrow-left.svg';


export default function ImgCarousel (props) {
    const [cabinImg, setCabinImg] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    function resetIndex () {
        
    }
    
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
        <Col lg='8' md='8'>
            <img src={props.images[cabinImg]} width='100%' />
            <div className='imgNav'>
                <span>
                    <div onClick={() => {nextImage()}} className='imgNav__button' style={{backgroundImage: `url(${arrowRight})`}}></div>
                </span>
                <span>
                    <div onClick={() => {prevImage()}} className='imgNav__button' style={{backgroundImage: `url(${arrowLeft})`}}></div>
                </span>
            </div>
            {console.log(cabinImg)}
        </Col>
    )
}