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
import './navbar.css'
export const Content = () => {
  return (
    <div>
        <div className='image'>
        <Container>
        <Row>
        <Col className='text-center box' style={{marginTop:'45px',marginLeft:'60%',height:'500px',borderRadius:'40px',maxWidth:'500px'}} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}} >
            <h2 className='mt-2'>Login</h2>
             <ButtonGroup size="large" aria-label="Large button group" style={{marginTop:'20px'}}>
            <Button1 style={{width:'200px'}}>LOGIn</Button1>
            <Button1 style={{width:'200px'}}><a href='/register'> Register</a></Button1>
            </ButtonGroup>
            <p className='text-center text-secondary mt-3'>------------Enter the details------------</p>
        <Form.Floating className="mt-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
        <Form.Floating className="mt-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="PhoneNo"
        />
        <label htmlFor="floatingInputCustom">Phone Number</label>
      </Form.Floating>
      <Form.Floating className='mt-3'>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <Button as="input" type="button" value="Login" className='mt-4' style={{width:'200px'}}/>{' '}
        </Col>
      </Row>
    </Container>
         </div>
    </div>
  )
}
