import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Form className="w-25 mx-auto">
        <h2>Please Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
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
        <p>You Have No Account Please ? <Link to={'/register'}>Register</Link></p>
      </Form>
    </Container>
  );
};

export default Login;
