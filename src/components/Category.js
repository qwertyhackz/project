import React from 'react';
import Card from 'react-bootstrap/Card';
import * as icons from 'react-icons/fa';
import './Category.css';
import App from '../App';
import Carousels from './Carousels';
import Footermenu from './Footermenu';

function Category() {
  return (
    <>
    <div className='card'><h1>Explore By Category</h1>
    <div className='row g-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><icons.FaMailBulk/></Card.Title>
        <Card.Subtitle className="mb-4">Marketing</Card.Subtitle>
        <Card.Text>123 Vacancy</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><icons.FaHeadset/></Card.Title>
        <Card.Subtitle className="mb-4">Customer Service</Card.Subtitle>
        <Card.Text>123 Vacancy</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><icons.FaUserTie/></Card.Title>
        <Card.Subtitle className="mb-4">Human Resource</Card.Subtitle>
        <Card.Text>123 Vacancy</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><icons.FaTasks/></Card.Title>
        <Card.Subtitle className="mb-4">Project Management</Card.Subtitle>
        <Card.Text>123 Vacancy</Card.Text>
      </Card.Body>
      
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><icons.FaChartLine/></Card.Title>
        <Card.Subtitle className="mb-4">Business Development</Card.Subtitle>
        <Card.Text>123 Vacancy</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><icons.FaHandsHelping/></Card.Title>
        <Card.Subtitle className="mb-4">Sales & Communication</Card.Subtitle>
        <Card.Text>123 Vacancy</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><icons.FaBookReader/></Card.Title>
        <Card.Subtitle className="mb-4">Teaching & Education</Card.Subtitle>
        <Card.Text>123 Vacancy</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><icons.FaDraftingCompass/></Card.Title>
        <Card.Subtitle className="mb-4">Design & Creative</Card.Subtitle>
        <Card.Text>123 Vacancy</Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  );
}

export default Category;