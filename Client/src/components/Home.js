import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Content.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button1 from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home () {
  const [email,SetEmail]=useState("");
  const [password,SetPassword]=useState("");
  const [reg,SetReg]=useState("");
    const navigate=useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    
    axios.post("http://localhost:8080/register/logincheck",{email:email,password:password})
    .then((res)=>{
      SetReg(res.data)
      
      console.log(res.data.regId);
       if(res.data.email===email && res.data.password===password){ 
        
          navigate("/profile",{state:res.data.regId});
       }else{
        alert("Login Failed")

       }
      
    },(error)=>console.log(error))
  }
  return (
    <div>
        <div className='image'>
        <Container>
        <Row>
        <Col className='text-center box' style={{marginTop:'45px',marginLeft:'60%',height:'500px',borderRadius:'40px',maxWidth:'500px'}} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}} >
            <h2 className='mt-2'>Login</h2>
             <ButtonGroup size="large" aria-label="Large button group" style={{marginTop:'20px'}}>
            <Button1 style={{width:'200px'}}>LOGIn</Button1>
            <Button1 style={{width:'200px',textDecoration:'none'}}> <Link to='/register'>Register</Link></Button1>
            </ButtonGroup>
            <p className='text-center text-secondary mt-3'>------------Enter the details------------</p>
            <form onSubmit={handleSubmit}>        <Form.Floating className="mt-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          onChange={e =>(SetEmail(e.target.value))}
          value={email}
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
       
      <Form.Floating className='mt-4'>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          onChange={e =>(SetPassword(e.target.value))}
          value={password}
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating><br/>
      <small>You don't  have an account? <Link to="/register">Register Here</Link></small><br /><br />
      <Button  type="submit" value="Login" className='mt-4 primary' style={{width:'200px'}} >Login</Button>
      </form>

        </Col>
      </Row>
    </Container>
         </div>
    </div>
  )
}
export default Home;