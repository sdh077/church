import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion"
import './style.css'
import FadeIn from '$components/motion/fadein';
import Scroll from '$components/motion/scroll';

function ICarousel() {
  return (
    <Carousel fade={true} className='position-relative overflow-hidden bg-image'>
      <Carousel.Item className='bg-dark c-img-wrap'>
        <img
          className="d-block opacity-50 carousel-custom"
          src="img/carousel/1.jpg"
          alt="First slide"
        />
        <div className='position-absolute text'>
          <FadeIn title={"그 사랑 교회"} titleWidth={2} />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-dark c-img-wrap'>
        <img
          className="d-block opacity-50 carousel-custom"
          src="img/carousel/2.jpg"
          alt="Second slide"
        />
        <div className='position-absolute text c-text'>
          <Scroll text={"Designed for Faabs"} img={null} direction={'right'} value={300} />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-dark c-img-wrap'>
        <img
          className="d-block opacity-50 carousel-custom"
          src="img/carousel/3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ICarousel;