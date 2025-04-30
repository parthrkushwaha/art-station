import React from "react";
import './SketchbookPage.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import product19 from '../../images/sketchbook1.jpg'
import product20 from '../../images/sketchbook2.jpg'
import product21 from '../../images/sketchbook3.jpg'
import product22 from '../../images/sketchbook4.jpg'
import product23 from '../../images/sketchbook5.jpg'
import product24 from '../../images/sketchbook6.jpg'
import product61 from '../../images/sketchbook7.jpg'
import product62 from '../../images/sketchbook8.jpg'
import product63 from '../../images/sketchbook9.jpg'
const sketchbookProducts = [
  {
    id: 39,
    title: "A4 Spiral Sketchbook",
    price: "₹419",
    location: "Delhi, India",
    date: "Today",
    image: product19, // Replace with actual image URL
  },
  {
    id: 40,
    title: "Premium Hardcover Sketchbook",
    price: "₹499",
    location: "Mumbai, Maharashtra",
    date: "Yesterday",
    image: product20,
  },
  {
    id: 41,
    title: "Watercolor Paper Sketchbook",
    price: "₹469",
    location: "Chennai, Tamil Nadu",
    date: "Feb 25",
    image: product21,
  },
  {
    id: 42,
    title: "Moleskine Premium Off-White Sketchbook",
    price: "₹789",
    location: "Imphal (Capital); Ukhrul",
    date: "dec 20",
    image:product22,
  },
  {
    id: 43,
    title: "Travel Sketchbook (Pocket Size)",
    price: "₹309",
    location: "Bhubaneswar (Capital); Puri",
    date: "oct 10",
    image:product23,
  },
  {
    id: 44,
    title: "Daler & Rowney Ebony Cartridge Book",
    price: "₹799",
    location: "Bangalore, Karnataka",
    date: "jun 31",
    image:product24,
  },
  {
    id: 45,
    title: "Stillman & Birn Sketchbook",
    price: "₹329",
    location: "Mumbai (Capital); Nagpur",
    date: "aug 20",
    image:product61,
  },
  {
    id: 46,
    title: "Speedball Sketchbook",
    price: "₹649",
    location: "Bangalore, Karnataka",
    date: "Feb 20",
    image:product62,
  },
  {
    id: 47,
    title: "Fabriano Hardcover Black Sketchbook",
    price: "₹529",
    location: "Bhopal (Capital); Indore",
    date: "mar 10",
    image:product63,
  },
];

const SketchbookPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Sketchbook Collection</h2>
      {/* <p>Explore a variety of sketchbooks available for sale.</p> */}
      
      <Row>
        {sketchbookProducts.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.title} className="h-2"/>
              <Card.Body>
                <Card.Title>{product.price}</Card.Title>
                <Card.Text>{product.title}</Card.Text>
                <Card.Text className="text-muted">{product.location} - {product.date}</Card.Text>
                <Button variant="primary" as={Link} to={`/product/${product.id}`}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SketchbookPage;
