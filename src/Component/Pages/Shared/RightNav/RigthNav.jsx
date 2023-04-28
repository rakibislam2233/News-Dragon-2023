import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import QZone from "./QZone";
import bg1 from '../../../../../public/images/bg1.png'
const RigthNav = () => {
  return (
    <div className="">
      <div>
        <h4>Login With</h4>
        <Button className="w-75" variant="outline-success">
          Login With Google{" "}
        </Button>
        <Button className="w-75 my-2" variant="outline-info">
          Login With Github
        </Button>
      </div>
      <div>
        <h4>Find Us On</h4>
        <ListGroup className="fs-5">
          <ListGroup.Item>Facebook</ListGroup.Item>
          <ListGroup.Item>Twitter</ListGroup.Item>
          <ListGroup.Item>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="my-2 position-relative">
        <img src={bg1} alt="" />
       <div className="text-center position-absolute top-0 text-white">
       <h3>Create an Amazing Newspaper</h3>
       <h5>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h5>
       <Button className="btn btn-danger">Learn More</Button>
       </div>
      </div>
    </div>
  );
};

export default RigthNav;
