import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
 
const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate();
 
    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:8080/register/register1",{first_name:firstName,last_name:lastName,email:email,password:password,phoneno:phoneno,date_of_birth:dateOfBirth})
        .then((res)=>{alert("Successfully");navigate("/");},(error)=>{console.log(error)})
    }
 
    return (
        <div style={{width:'700px',marginLeft:'400px',marginTop:'80px'}}>
            <h2 className='text-center'>Register Form</h2><br />
            <form onSubmit={handleSubmit} action={<Link to="/" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Phone Number"
                    onChange={e => setPhoneno(e.target.value)}
                    value={phoneno}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    required
                    fullWidth
                   
                    sx={{mb: 4}}
                /><center>
                    <small>Already have an account? <Link to="/">Login Here</Link></small><br /><br />
                <Button variant="outlined" color="primary" type="submit" >Register</Button></center>     
            </form>
            
     
        </div>
    )
}
 
export default RegisterForm;