import React from "react";
import Header from "../../Pages/Shared/Header/Header";
import Footer from "../../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../../Pages/Shared/LeftNav/LeftNav";
import RigthNav from "../../Pages/Shared/RightNav/RigthNav";
import { Outlet } from "react-router-dom";
import Navigation from "../../Pages/Shared/Navigation/Navigation";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RigthNav></RigthNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
