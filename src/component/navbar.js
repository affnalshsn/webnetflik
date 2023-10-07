import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { 
  Navjudul,
  ContentNav
} from './Card.style';
import { NavbarBrand } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Tav = ({nyuba}) => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar variant="light" className='nav-edit'>
        <Container className='container '>
          <ContentNav>
            <div>
              <Navjudul href="#home" className=' judul'>finnflm</Navjudul>
            </div>
            <div>
              {nyuba === true ?(
              <Nav className="me-auto box-nav">
                <button onClick={()=> navigate('/login')}>Sign In</button>
              </Nav>
              ):(
                <Nav className="me-auto box-nav">
                <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                <Nav.Link href="#features" className='text-white'>Features</Nav.Link>
                <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>
              </Nav>
              )
              }
            </div>
          </ContentNav>
        </Container>
      </Navbar>
    </>
  );
}

export default Tav;