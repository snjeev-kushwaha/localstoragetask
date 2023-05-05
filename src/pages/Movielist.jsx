import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Navbars from '../components/Navbar';

const Movielist = () => {
  const [movieinfo, setMovieinfo] = useState({
    category: '',
    language: '',
    genre: '',
    image: '',
    sort: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieinfo({ ...movieinfo, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('movie', JSON.stringify(movieinfo))

    setMovieinfo({
      category: '',
      language: '',
      genre: '',
      image: '',
      sort: ''
    })
  }

  return (
    <>
      <Navbars />
      <div className='p-5'>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            <div className="col">
              <div className="p-3"></div>
            </div>
            <div className="col">
              <div className="p-3 border bg-light" style={{ boxShadow: "10px 10px 5px lightblue" }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} className="mb-3" controlId="formBasicCategory">
                    <Form.Label column sm="3">Category :</Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" placeholder="Enter Category" name='category' value={movieinfo.category} onChange={handleChange} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formBasicLanguange">
                    <Form.Label column sm="3">Language :</Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" placeholder="Enter Language" name='language' value={movieinfo.language} onChange={handleChange} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formBasicGenre">
                    <Form.Label column sm="3">Genre :</Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" placeholder="Enter genre" name='genre' value={movieinfo.genre} onChange={handleChange} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formBasicSort">
                    <Form.Label column sm="3">Image :</Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" placeholder="Enter Image" name='image' value={movieinfo.image} onChange={handleChange} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formBasicSort">
                    <Form.Label column sm="3">Sort :</Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" placeholder="Enter sort" name='sort' value={movieinfo.sort} onChange={handleChange} />
                    </Col>
                  </Form.Group>
                  <Button variant="outline-primary" type="submit">Submit</Button>
                </Form>
              </div>
            </div>
            <div className="col">
              <div className="p-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movielist