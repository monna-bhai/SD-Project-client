import React from 'react';
import { Carousel } from 'react-bootstrap';

const Bannar = () => {
    return (
    <div>
 <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.bok.com.pk/sites/default/files/styles/detail_banner/public/2021-05/Raast%20Savings%20Account-3b.png?itok=CyLUwJnn"
          alt="First slide"
          weidth="700"
          height="600"
        />
        <Carousel.Caption>
          <h3>Masjidul Haram</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/umrah-couple-presenting-copyspace_8595-9859.jpg?w=996"
          alt="First slide"
          weidth="700"
          height="600"
        />
        <Carousel.Caption>
          <h3>Masjidul Haram</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://as1.ftcdn.net/v2/jpg/02/98/81/12/1000_F_298811255_MHROBbKsgQSqgWPlzPgzcHxTYdKQOvca.jpg"
          alt="First slide"
          weidth="700"
          height="600"
        />
        <Carousel.Caption>
          <h3>Masjidul Haram</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://as1.ftcdn.net/v2/jpg/05/06/96/12/1000_F_506961234_TnK7c3r1jyuKa8Ky1Lqw54zjv5pUaQDt.jpg"
          alt="First slide"
          weidth="700"
          height="600"
        />
        <Carousel.Caption>
          <h3>Masjidul Haram</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
    );
};

export default Bannar;