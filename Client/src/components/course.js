import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./course.css"
import Accordion from 'react-bootstrap/Accordion';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Quiz from './quiz';
import Answer from './answer';
const Course = () => {
  const location=useLocation();
  const id=location.state;
  const [empdet,setEmpdet]=useState("");
  
  console.log(id)
  
 const coun = [
  {   
    "id":"Learn",
    "name": "Python",
    "developer": "Guido van Rossum",
    "first_appeared": 1991,
    "paradigm":"Start Learning the Cource",
    "current_version": "3.10.4",
    "website": "https://www.youtube.com/embed/bm0OyhwFDuY?si=jvhXJ9kgZzTuIB0I"
}
 ]

  useEffect(() => {
     axios.get(`http://localhost:8080/register/fetchdisplay/${id}`)
      .then(res => {
        setEmpdet(res.data) 
        console.log(res.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
  return (
    <div className='cousecon'>
     <h1 className='head'>{empdet.course}</h1><br /><br />
     <Row><Col>
     <div className='video'>{
    coun.map((cour)=>
     <iframe width="650" height="350" src={cour.website} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    )}
     </div></Col>
     <Col>
    <div style={{width:"560px",}}>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Chapter1</Accordion.Header>
        <Accordion.Body>
         <li> Basics of {empdet.course}</li>
        </Accordion.Body>
        <Accordion.Body>
         <li> Installation of jdk</li>
        </Accordion.Body>
        <Accordion.Body>
         <li> running our first program</li>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Chapter 2</Accordion.Header>
        <Accordion.Body>
          Learnind data types
        </Accordion.Body>
        <Accordion.Body>
        Learn the differences between Abstract Classes and Interfaces with practical examples
        </Accordion.Body>
        <Accordion.Body>
        Explore Functional Interfaces, Lambda Expressions 
        </Accordion.Body>
        <Accordion.Body>
        Use Generics and Streams to write efficient code
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Chapter 3</Accordion.Header>
        <Accordion.Body>
          LDelve into the workings of HashMap
        </Accordion.Body>
        <Accordion.Body>
        Understand the concepts of Multithreading, such as Thread creation, Thread Groups, and Thread Join
        </Accordion.Body>
        <Accordion.Body>
        Learn to differentiate between Sequential and Parallel Streams for effective task execution
        </Accordion.Body>
        <Accordion.Body>
        Work with {empdet.course} Collections for efficient data management
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Chapter 4</Accordion.Header>
        <Accordion.Body>
        Understand the need for Maven
        </Accordion.Body>
        <Accordion.Body>
        Learn the differences between Abstract Classes and Interfaces with practical examples
        </Accordion.Body>
        <Accordion.Body>
        ELearn to work with POM.xml, explore different Maven Repositories and their types
        </Accordion.Body>
        <Accordion.Body>
        Understand the Maven Lifecycle for efficient project management
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Attend the Quiz</Accordion.Header>
        <Accordion.Body>
        <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          {empdet.course}
        </AccordionSummary>
        <AccordionDetails>
         Attend the QUIZ {empdet.course}
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
        </Accordion.Body>
        
      </Accordion.Item>
    </Accordion> </div>
    </Col>
    </Row>
    <div style={{width:"600px",marginLeft:"400px"}}>
      
      <Quiz/>
    </div>
    </div>
  )
}

export default Course