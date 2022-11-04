import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Box } from "@material-ui/core";

function AnimatedCarousel() {
  return (
    <React.Fragment>
      <Box sx={{background: '#4D4D4D'}}>
    <Carousel bg="#4D4D4D">
      <Carousel.Item interval={1000}>
        <img
          className="d-block m-auto"
          style={{ height: 400}}
          src="https://wallpaperaccess.com/full/1282257.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block m-auto"
          style={{ height: 400}}
          src="https://wallpaperaccess.com/full/1760844.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block m-auto"
          style={{ height: 400 }}
          src="https://i0.wp.com/wallpapercave.com/wp/wp4473736.jpg"
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
    </Box>
    </React.Fragment>
  );
}

export default AnimatedCarousel;