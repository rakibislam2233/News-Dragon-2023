import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import images1 from '../../../../../public/images/1.png';
import images2 from '../../../../../public/images/2.png';
import images3 from '../../../../../public/images/3.png';
const Insight = () => {
  return (
    <CardGroup className="gap-4">
      <Card className="rounded fs-5">
        <Card.Img variant="top" src={images1} />
        <Card.Body>
          <Card.Text>
          21 The Most Stylish Wedding Guest Dresses For Spring
          </Card.Text>
        </Card.Body>
        <div>
            <h5>Jan 4, 2022</h5>
        </div>
      </Card>
      <Card className="rounded fs-5">
        <Card.Img variant="top" src={images2} />
        <Card.Body>
          <Card.Text>
          21 The Most Stylish Wedding Guest Dresses For Spring
          </Card.Text>
        </Card.Body>
        <div>
            <h5>Jan 4, 2022</h5>
        </div>
      </Card>
      <Card className="rounded fs-5">
        <Card.Img variant="top" src={images3} />
        <Card.Body>
          <Card.Text >
          21 The Most Stylish Wedding Guest Dresses For Spring
          </Card.Text>
        </Card.Body>
        <div>
            <h5>Jan 4, 2022</h5>
        </div>
      </Card>
    </CardGroup>
  );
};

export default Insight;
