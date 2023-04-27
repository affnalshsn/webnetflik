

// ini landing page tampilan






import './App.css';
import Tav from './component/navbar';
import Show from './component/card';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import  './navbar.css';
import './component/card.css';
import Input from './component/search';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Contentimg,
        Text
} from './App.style';
import imeg from './component/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg'
import { Row,Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {

const [movies, setMovies] = useState([])
const [seacrh, setSearch] = useState('')


useEffect(()=>{

  const data = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=eba6a77e&s=${seacrh}`)
    setMovies(response.data.Search)
  }
  data()
},[seacrh]);
// console.log(seacrh)



  return (
    <div>
      <Contentimg imgUrl={imeg}>
        <Tav/>
        <Container>
        <Text>
         <h2>Mau nonton film?</h2>
         <h3>disini aja..</h3>
        </Text>
        <InputGroup className="mb-3 input-key">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={seacrh}
          onChange={(e)=> setSearch(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" className='buttonkey'>
          Button
        </Button>
      </InputGroup>
        </Container>
      </Contentimg>
      <div className='landing-page'>
        <Container>
          {seacrh.length > 0 && movies ?( 
             <div className=' grd'>
             <Row className='pt-3 grd'>
              {movies.map((response, index)=> {
            return( 
            <Col md={4} key={index} className='mb-3'><Show gambar={response.Poster} title={response.Title}/></Col>
            )
          })}
           </Row>
           </div>
          ):(
            <div className='cobak'>
            <h2>not found</h2>
            </div>
          )}
        </Container>
      </div>
   </div>
  );
}

export default App;