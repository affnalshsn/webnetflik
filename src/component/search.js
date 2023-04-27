import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Input = () => {
const [seacrh,setSearch] = useState()
  return (
    <>
      <InputGroup className="mb-3 input-key">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearch=(e.target.value) }
        />
        <Button variant="outline-secondary" id="button-addon2" className='buttonkey'>
          Button
        </Button>
      </InputGroup>
    </>
  );
}
export default Input;