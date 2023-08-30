import Carousel from 'react-bootstrap/Carousel';
import img1 from"./Carousel/img1.webp";
import img2 from"./Carousel/img2.webp";
import img3 from"./Carousel/img3.webp";
import img4 from"./Carousel/img4.webp";

function Carousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100 img-carousel item-carousel-1' src={img1} alt='img1-carousel'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100 img-carousel item-carousel-2' src={img2} alt='img2-carousel'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100 img-carousel item-carousel-3' src={img3} alt='img3-carousel'/>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100 img-carousel item-carousel-4' src={img4} alt='img4-carousel'/>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;