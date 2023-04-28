import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import moment from 'moment';
import { FaBookmark,FaShare,FaEye,FaStar,FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import Insight from "../Insight/Insight";
const NewsCard = ({ news }) => {
  const { _id,title, details, image_url, author, others_info,total_view,rating } = news;
  return (
   <>
    <Card className="my-4">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
        <Image style={{height:'50px',borderRadius:'50%'}} src={author.img}></Image>
        <div>
            <p>{author.name}</p>
            <p>{moment(author.published_date).format('yy-MM-DD')}</p>
        </div>
        </div>
        <div className="">
        <FaBookmark className="mx-2 fs-5"></FaBookmark>
        <FaShare className="fs-5"></FaShare>    
        </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" className="h-32" src={image_url} />
        <Card.Text>{details.length<250 ? <>{details}</> : details.slice(0,250)}.... <Link to={`/news/${_id}`}>Read More</Link></Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div className="d-flex gap-2 align-items-center">
            <div className="text-warning">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalf></FaStarHalf>
            </div>
            <span color="fs-5">{rating?.number}</span>
        </div>
      <div className="d-flex align-items-center gap-2">
      <FaEye></FaEye>
      <div>{total_view}</div>
      </div>
      </Card.Footer>
    </Card>
   <div>
    
   </div>
   </>
  );
};

export default NewsCard;
