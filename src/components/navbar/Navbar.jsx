import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Customnavbar() {
  return (
    <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand href="#home" className='text-white'>Resturant</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to='/' className='me-4 text-black text-decoration-none text-white'>Home</Link>
          <Link to='/products' className='me-4 text-black text-decoration-none text-white'>Products</Link>
          <Link to='/Resturant' className='me-4 text-black text-decoration-none text-white'>Resturant</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default Customnavbar;