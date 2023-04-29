import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [checked,setChecked]= useState(false)
  const { createUser } = useContext(UserContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photoUrl = from.photo.value;
    console.log(name, email, password, photoUrl);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserInfo(user, name, photoUrl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handelCheck = (e)=>{
    setChecked(e.target.checked);
  }
  const updateUserInfo = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  return (
    <Container>
      <Form onSubmit={handleRegister} className="w-25 mx-auto">
        <h2>Please Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            placeholder="Enter Your Photo Url"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handelCheck}
            type="checkbox"
            label={
              <>
                Accpect <Link to={"/tramsCondtion"}>Trams And Condition</Link>
              </>
            }
          />
        </Form.Group>
        <Button   disabled={!checked}                    className="w-full" variant="primary" type="submit">
          Submit
        </Button>
        <p>
          Already You Have Account Please ? <Link to={"/login"}>Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
