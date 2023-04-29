import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Insight from "../Home/Insight/Insight";

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    title,
    details,
    image_url,
    category_id,
    others_info,
    total_view,
    rating,
  } = news;
  return (
    <>
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/catelogories/${category_id}`}>
          <Button className="btn-danger" variant="primary">
            All News in this Category
          </Button>
        </Link>
      </Card.Body>
    </Card>
    <div className="my-4">
    {
      <Insight></Insight>
    }
    </div>
    </>
  );
};

export default News;
