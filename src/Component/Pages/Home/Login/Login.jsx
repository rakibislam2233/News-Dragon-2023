import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(UserContext);
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/'
  console.log(from);
  const naveget = useNavigate()
  const handelLogin = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then((result) =>{
      const user = result.user;
      console.log(user);
      naveget(from,{replace:true})
      setLoading(false)
    })
    .catch(err=>{
      console.log(err.message);
    })
  }
  return (
    <Container>
      <Form onSubmit={handelLogin} className="w-25 mx-auto mx">
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
