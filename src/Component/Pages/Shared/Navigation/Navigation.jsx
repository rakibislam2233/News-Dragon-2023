import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";

const Navigation = () => {
    const {users,Logout} = useContext(UserContext)
    const handelLogout= ()=>{
      Logout()
      .then(()=>{

      })
      .catch((err)=>{
        console.log(err.message);
      })
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto fs-5">
            <Link className="text-decoration-none mx-2" to={"/"}>
              Home
            </Link>
            <Link className="text-decoration-none" to={"/about"}>
              About
            </Link>
            <Link className="text-decoration-none mx-2" to={"/carear"}>
              Carear
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#profile">
              {users ? (
                <>
                  <img  style={{width:'40px',height:'40px',borderRadius:'50%'}} src={users.photoURL} alt="" />
                </>
              ) : (
                <FaUserCircle className="fs-2"></FaUserCircle>
              )}
            </Nav.Link>
            { users? (
              <Button onClick={handelLogout} variant="secondary">Sign Out</Button>
            ) : (
              <Link to={"/login"}>
                <Button variant="primary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
