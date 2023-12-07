import Tav from "./component/navbar";
import  './navbar.css';
import { useState } from "react";
import { Contentimg ,Text} from "./App.style";
import imgfirst from './component/krists-luhaers-AtPWnYNDJnM-unsplash.jpg'
import { Container,Button,Form,InputGroup } from "react-bootstrap";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { setuserName } from "./features/username/nameSlice";
import { useDispatch } from "react-redux";
const Landingone = () => {
 const [input, setinput] = useState('');
 const dispatch = useDispatch()
   

  const handlesubmit = (e) =>  {
    e.preventDefault()
    dispatch(setuserName(input))
  }



    return(
    <div>
      <Contentimg imgUrl={imgfirst}>
      <Tav nyuba={true}/>
      <Container>
       <Text>
        <h2 className="text-white t2">Unlimited movies,Tv shows,and more .</h2>
        <h3 className="text-white t2">watch anywhere, canelarytime</h3>
        <h6 className="t2">ready to watch ? enter your email to create or start</h6>
       </Text>
       <form onSubmit={handlesubmit}>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={input}
          onChange={(e)=> setinput(e.target.value)}
          
        />
        <Button type="submit" variant="outline-secondary" id="button-addon2" className='buttonkey' >
          Get Started
        </Button>
      </InputGroup>
       </form>
        </Container>
        </Contentimg>
    </div>
    )
}
export default Landingone;
