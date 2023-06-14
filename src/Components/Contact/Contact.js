import React from 'react';
import './contact.css'
import { Button, Form } from "react-bootstrap";

const Contact = () => {
    return (
    <div>



<div class="contactmain">
<div >
  <h2  class="content" >Do You Want To Contact Us</h2>
  <p class="contentt">You can find our service in everywhere. We provide home consultaition service in whole country. You can find us in your location easily</p>
  <div class="row container mt-5"> 
<div class="col-lg-6 slider-text">
<div class="box">
          <h3>Address</h3>
          <p>4347, House of Mejor Faruk Ahmed.Raozan, Chittagong</p>
      </div>
      <div class="box">
        <h3>Phone</h3>
        <p>01842 105 605</p>
      </div>
      <div class="box">
        <h3>Email</h3>
        <p>Monna5069@gmail.com</p>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
</div>
<div class="col-lg-6 slider-image">
<div class="form container mt-5">
           <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Name</Form.Label>
        <Form.Control  type="text" placeholder="Enter Service Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Cost</Form.Label>
        <Form.Control   type="text" placeholder="Enter Service Cost" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Duration</Form.Label>
        <Form.Control type="text" placeholder="Enter Service Duration" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
</div>
</div>
</div>
</div>





    </div>
    );
};

export default Contact;