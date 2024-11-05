import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
function Slider() {
  return  (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://bertschinnovation.com/en/wp-content/uploads/sites/9/2022/11/Product-Content-Title-.png"
        alt="First slide"
        style={{ objectFit: 'cover', height: '400px' }} // Ensuring height is fixed
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Some description for the first slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://bertschinnovation.com/en/wp-content/uploads/sites/9/2022/11/Product-Content-Title-.png"
        alt="Second slide"
        style={{ objectFit: 'cover', height: '400px' }} // Ensuring height is fixed
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Some description for the second slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://bertschinnovation.com/en/wp-content/uploads/sites/9/2022/11/Product-Content-Title-.png"
        alt="Third slide"
        style={{ objectFit: 'cover', height: '400px' }} // Ensuring height is fixed
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Some description for the third slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Slider


