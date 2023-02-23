import {Button, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import * as icons from 'react-icons/fa';
import './Navbar.css';

function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">JobSearch<icons.FaSearchPlus/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ maxHeight: '78px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Jobs" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/joblist">Job List</NavDropdown.Item>
              <NavDropdown.Item href="/jobdetail">Job Detail</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category">Job Category</NavDropdown.Item>
              <NavDropdown.Item href="/testimonial">Testimonial</NavDropdown.Item>
              <NavDropdown.Item href="/error">404</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
            <Button variant="success"  className='arrow'>Post A Job <icons.FaArrowRight color='white'/></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Navbars;