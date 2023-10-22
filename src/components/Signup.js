import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link ,useNavigate} from 'react-router-dom';
import React, { useRef } from 'react'

function Signup() {

  let navigate = useNavigate();
  let firtsNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();


  return (
    <div className='signForm'>
     <img id='formImg' src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>
     <img id='loginimg' src='https://i.pinimg.com/564x/3c/0b/67/3c0b670e17d929978d4b70e078a3cbf4.jpg'></img>

        <Form>
    <br></br>
    <h1> Create Your <b>NYKAA</b> ID.</h1>
    <h5>One NYKAA ID is all you need to access all NYKAA services.</h5>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><strong>First name<b>*</b></strong></Form.Label>
        <Form.Control ref={firtsNameInputRef} />
        <Form.Label><strong>Last name<b>*</b></strong></Form.Label>
        <Form.Control ref={lastNameInputRef}/>
       <Form.Label><strong>Email address<b>*</b></strong></Form.Label>
        <Form.Control ref={emailInputRef} type="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Password<b>*</b></strong></Form.Label>
        <Form.Control ref={passwordInputRef} type="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button id='loginButton' variant="dark" type="button" onClick={()=>{
      
      if(firtsNameInputRef.current.value ==0 &&
        lastNameInputRef.current.value ==0 &&
        emailInputRef.current.value ==0 &&
        passwordInputRef.current.value ==0 
        ){
        alert("Please fill in required fields")
     }else{
      alert("Successfully created account.")
     }

        
      }}>
       Create
      </Button>
      <br></br>
      <br></br>
      <h4 id='loginInfo'>Already have an Account.</h4>
      <Link id='loginSignup' to="/Login"> Sign in.</Link>
      <br></br>
      <br></br>
    </Form>
    </div>
  )
}

export default Signup