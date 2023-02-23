import React from 'react';
import {Carousel, Button, Form} from 'react-bootstrap';
import './Carousels.css';

function Carousels() {
  return (
  <>
     <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="image"
          src="caro1.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h1 className='header'>Find The Perfect Job That You Deserved</h1>
          <p className='para'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. 
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <Button href='/searchjob' variant="primary">Search A Job</Button>{' '}
            <Button href='/findtalent' variant="secondary">Find A Talent</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="image"
          src="caro2.jpg"
          alt="Second slide"/>
        <Carousel.Caption>
          <h1 className='header'>Find The Best Startup Job That Fit You</h1>
          <p className='para'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. 
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <Button href='/searchjob' variant="primary">Search A Job</Button>{' '}
            <Button href='/findtalent' variant="secondary">Find A Talent</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='search'>
     <Form.Control type="text" placeholder="Key Word"/>
     <Form.Select aria-label="Default select example">
     <option>Category</option>
     <option value="1">Category1</option>
     <option value="2">Category2</option>
     <option value="3">Category3</option>
   </Form.Select>
   <Form.Select aria-label="Default select example">
     <option>Location</option>
     <option value="1">Location1</option>
     <option value="2">Location2</option>
     <option value="3">Location3</option>
   </Form.Select>
   <Button variant="danger">Search</Button>{' '}
   </div>
   </>
  );
}

export default Carousels;