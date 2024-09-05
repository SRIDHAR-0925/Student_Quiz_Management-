import * as React from 'react';
import Button1 from '@mui/material/Button';
import { TextField, Stack } from '@mui/material';
import "./profile.css";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Logo from '../img/6yvpkj.jpg';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const location=useLocation();
  let id =location.state;
  const [empdet, setEmpdet] = useState({});
  const [course, setCourse] = useState(null);
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const navigate=useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8080/register/fetchdisplay/${id}`)
      .then(res => {
        setEmpdet(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/register/profile/${id}`, { course: course })
      .then(res => {
        alert("Update Success");navigate("/course",{state:id});
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="procon">
      <div className="procon1">
        <div className="profile">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{ display: "none" }}
          />
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
            onClick={() => imageUploader.current.click()}
          >
            <img
              alt=''
              ref={uploadedImage}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "100px",
                backgroundImage: `url(${Logo})`,
                backgroundSize: "cover",
                border: "1px solid black"
              }}
            />
          </div>
          <p style={{ marginLeft: '80px' }}>Profile</p>
        </div>
        <form style={{ width: '400px', marginLeft: '60px' }} onSubmit={update}>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant='outlined'
              color='secondary'
              value={empdet.first_name || ''}
              fullWidth
              required
              onChange={(e) => setEmpdet({ ...empdet, first_name: e.target.value })}
            />
          </Stack>
          <TextField
            type="email"
            variant='outlined'
            color='secondary'
            value={empdet.email || ''}
            fullWidth
            required
            sx={{ mb: 4 }}
            onChange={(e) => setEmpdet({ ...empdet, email: e.target.value })}
          />
          <TextField
            type="password"
            variant='outlined'
            color='secondary'
            value={empdet.password || ''}
            required
            fullWidth
            sx={{ mb: 4 }}
            onChange={(e) => setEmpdet({ ...empdet, password: e.target.value })}
          />
          <TextField
            type="number"
            variant='outlined'
            color='secondary'
            value={empdet.phoneno || ''}
            required
            fullWidth
            sx={{ mb: 4 }}
            onChange={(e) => setEmpdet({ ...empdet, phoneno: e.target.value })}
          />
          <Form.Select
            aria-label="Default select example"
            style={{ height: '50px' }}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option>Select Course</option>
            <option value="java">Java</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
          </Form.Select>
          <br />
          <TextField
            type="date"
            variant='outlined'
            color='secondary'
            value={empdet.date_of_birth || ''}
            required
            fullWidth
            sx={{ mb: 4 }}
            onChange={(e) => setEmpdet({ ...empdet, date_of_birth: e.target.value })}
          />
          <center>
            <Button1 variant="outlined" color="primary" type="submit">Update</Button1>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Profile;
