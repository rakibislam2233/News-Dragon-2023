import React, { useContext } from "react";
import logo from "../../../../../public/images/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../../../Provider/AuthProvider/AuthProvider";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  const {user} = useContext(UserContext);
  return (
    <Container>
      <div className="text-center py-2">
        <img src={logo} alt="" />
        <p className="text-secondary fs-4">Journalism Without Fear or Favour</p>
        <p className="fs-5">{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
        <div className="rounded bg-warning p-2 gap-3 fs-4 d-flex my-2">
          <Button>Latest</Button>
          <Marquee>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
    </Container>
  );
};

export default Header;
