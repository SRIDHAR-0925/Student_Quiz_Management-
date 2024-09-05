import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Logo from '../img/play.png'
import Avatar from "@mui/material/Avatar";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
const page = [
    
            {   
                "id":"Learn",
                "name": "Python",
                "developer": "Guido van Rossum",
                "first_appeared": 1991,
                "paradigm":"Start Learning the Cource",
                "current_version": "3.10.4",
                "website": "https://www.w3schools.com/python/default.asp"
            },
            {
                "id":"Learn",
                "name": "JavaScript",
                "developer": "Brendan Eich",
                "first_appeared": 1995,
                "paradigm":"Start Learning the Cource",
                "current_version": "ES2023",
                "website": "https://www.javascript.com"
            },
            {
                "id":"Learn",
                "name": "Java",
                "developer": "James Gosling",
                "first_appeared": 1995,
                "paradigm":"Start Learning the Cource",
                "current_version": "17",
                "website": "https://www.oracle.com/java/"
            },
            {
                "id":"Learn",
                "name": "C++",
                "developer": "Bjarne Stroustrup",
                "first_appeared": 1985,
                "paradigm":"Start Learning the Cource",
                "current_version": "C++20",
                "website": "https://isocpp.org"
            },
            {
                "id":"Learn",
                "name": "Go",
                "developer": "Robert Griesemer",
                "first_appeared": 2009,
                "paradigm":"Start Learning the Cource",
                "current_version": "1.18",
                "website": "https://golang.org"
            },
            {
                "id":"Learn",
                "name": "Web Development",
                "developer": "Robert Griesemer",
                "first_appeared": 2009,
                "paradigm":"Start Learning the Cource",
                "current_version": "1.18",
                "website": "https://golang.org"
            }
        ];

export default function StudyMaterial() {
  return (
    <div>
        <h3 className='text-center mt-5' style={{fontFamily:'sans-serif',fontStyle:'revert'}}>SELECT COURSE</h3>
      {page.map((page) => (
        <Box id="box">
        <React.Fragment>
         <CardContent >
             <Typography textAlign="center" id='head'>{page.id}</Typography>  <br />           
                <Typography variant="h5" component="div">
                     {page.name}
                     <img src={<Logo/>} alt="" />
                </Typography>
               <Avatar id="Logo" src={Logo} />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 {page.developer}
             </Typography>
             
            <Typography variant="body2">
                {page.paradigm}
            </Typography>
                <br />
            <CardActions>
            <Button  className='outline-primary'><a href={page.website} target='__blank'>Select Course</a></Button>
            </CardActions>
        </CardContent>
        </React.Fragment>
        </Box>
     ))}
   </div>
  );
}
