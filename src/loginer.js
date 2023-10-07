import { Contentimg} from "./App.style";
import imglogin from './component/imgk.jpg'
import {Form,Col, InputGroup, Button} from 'react-bootstrap'
import './loginer.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginer = () => {
const navigates = useNavigate()

    const [text, settext] = useState({
        first : '',
        last : '',
        username : ''
    })
 
    const onchange = (e) => {
     settext({...text, [e.target.name] : e.target.value});
    }
    const [error,seterror]  = useState({})

     const handlesubmit= (e) => {
         e.preventDefault();
         const newer = handlevalidation(text)
         seterror(newer)
         if(Object.keys(newer).length === 0){
            navigates('/landingpage')
         }

     }

     const handlevalidation = (data) => {
         const obj = {};  //name : 'name is required' , last : 'name is required'

         if(data.first === ''){
            obj.name = 'name is required'
         }
         if(data.username === ''){
            obj.username = 'username is required'
         }
         return obj;
     }

    return (
        <div>
        <Contentimg imgUrl={imglogin}>
            <div className="flx">
            <div className="boxfrom">
                <h2>Sign in</h2>
                <Form className="fromvalida" onSubmit={handlesubmit}>
                    <InputGroup className="mb-4">
                        <InputGroup.Text>First and last name</InputGroup.Text>
                        <Form.Control 
                        aria-label="First name"
                        name="first"
                        value={text.first} 
                        onChange={onchange}
                        />
                        {/* <Form.Control 
                        aria-label="Last name" 
                        name="last"
                        value={text.last} 
                        onChange={onchange}
                        
                        /> */}
                    </InputGroup>
                        {error.name && <p style={{color:'red'}}>{error.name}</p>}

                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="username"
                            value={text.username} 
                            onChange={onchange}
                            />
                        </InputGroup>
                        {error.username && <p style={{color:'red'}}>{error.username}</p>}

                 <Button className="btnfrm" type="submit">Submit</Button>
                </Form>
            </div>
            </div>
        </Contentimg>
        </div>
    )
}

export default Loginer;