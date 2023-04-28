import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
        <Form className="w-25 mx-auto">
          <h2>Please Register</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter Your Email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control name="photo" type="text" placeholder="Enter Your Photo Url" required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  type="password"  name="password" required placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button  className="w-full" variant="primary" type="submit">
            Submit
          </Button>
          <p>Already You Have Account Please ? <Link to={'/login'}>Login</Link></p>
        </Form>
      </Container>
    );
};

export default Register;