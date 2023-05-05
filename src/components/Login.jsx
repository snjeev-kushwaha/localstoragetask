import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [logininfo, setLogininfo] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogininfo({ ...logininfo, [name]: value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('name'));
    if (userData.email === logininfo.email) {
      toast.success("Successfully Login")
      navigate('/home')
    } else {
      toast.error('Invalid Password')
    }
  }

  return (
    <div className='p-5' >
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div className="p-3"></div>
          </div>
          <div className="col">
            <div className="p-3">
              <Card style={{ width: '28rem', boxShadow: "10px 10px 5px lightblue" }}>
                <Card.Body>
                  <Card.Title>User Login Form</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                      <label for="inputPassword" className="col-sm-3 col-form-label">Email :</label>
                      <div className="col-sm-8">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" name='email' onChange={handleChange} />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label for="inputPassword" className="col-sm-3 col-form-label">Password :</label>
                      <div className="col-sm-7">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Enter Password" name='password' onChange={handleChange} />
                      </div>
                    </div>

                    <div className="row gx-1">
                      <div className="col-6">
                        <div><Button variant="outline-primary" type="submit">
                          Submit
                        </Button></div>
                      </div>
                      <div className="col-4">
                        <div><Button variant="outline-primary" type="submit"><Link to='register' style={{ textDecoration: "none" }}>
                          Sign Up
                        </Link>
                        </Button></div>
                      </div>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col">
            <div className="p-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login