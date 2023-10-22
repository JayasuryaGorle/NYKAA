import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
   

  

  return (
    <div className='formHead'>
     <img id='formImg' src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>
<img id='loginimg' src='https://i.pinimg.com/564x/a2/66/cf/a266cf79100e06faf26fecf00e5f796c.jpg'></img>
<Form>
    <br></br>
    <h1> Sign in for <b>faster</b> checkout.</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><strong>Email address<b>*</b></strong></Form.Label>
        <Form.Control ref={emailInputRef}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Password<b>*</b></strong></Form.Label>
        <Form.Control ref={passwordInputRef}  type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  label="Remember me" />
      </Form.Group>
      <Button id='loginButton' variant="dark" type="button" onClick={()=>{

if(emailInputRef.current.value == 0 &&
  passwordInputRef.current.value == 0){
    alert("Please fill * fields");
  }else{
    navigate("/About")
  }
      }}> 
        Sign in
      </Button>
      <br></br>
      <br></br>
      <h4 id='loginInfo'>Don't have an Account<b>?</b></h4>
      <Link id='loginSignup' to="/Signup"> Create yours now.</Link>
      <br></br>
      <br></br>
    </Form>
         
    </div>
    
  )
}

export default Login