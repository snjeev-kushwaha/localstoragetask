import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState({
    name: '',
    email: '',
    password: '',
    phone_no: '',
    profession: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserinfo({ ...userinfo, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(userinfo))
    toast.success("Successfully Register the User")
    navigate('/')

    setUserinfo({
      name: '',
      email: '',
      password: '',
      phone_no: '',
      profession: '',
    })
  }

  return (
    <div className='p-5'>
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
                      <label for="inputName" className="col-sm-3 col-form-label">Name :</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" id="inputName" placeholder="Enter name" name='name' value={userinfo.name} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label for="inputEmail" className="col-sm-3 col-form-label">Email :</label>
                      <div className="col-sm-8">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" name='email' value={userinfo.email} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label for="inputPassword" className="col-sm-3 col-form-label">Password :</label>
                      <div className="col-sm-7">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Enter Password" name='password' value={userinfo.password} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label for="inputPhone_no" className="col-sm-3 col-form-label">Phone_no :</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" id="inputPhone_no" placeholder="Enter Phone Number" name='phone_no' value={userinfo.phone_no} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label for="inputPhone_no" className="col-sm-3 col-form-label">Profession :</label>
                      <div className="col-sm-8">
                        <select className="form-select" aria-label="Default select example" name='profession' value={userinfo.profession} onChange={handleChange}>
                          <option>Select Profession</option>
                          <option value="Accountent">Accountent</option>
                          <option value="Architect">Architect</option>
                          <option value="Author">Author</option>
                          <option value="Actor/Actress">Actor/Actress</option>
                          <option value="Banker">Banker</option>
                        </select>
                      </div>
                    </div>
                    <Button variant="outline-primary" type="submit" className='mt-3'>
                      Submit
                    </Button>
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
    </div >
  )
}

export default Register