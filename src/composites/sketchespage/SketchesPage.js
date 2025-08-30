import React from "react";
import './SketchesPage.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import product13 from '../../images/sketch2.jpg'
import product14 from '../../images/sketch3.png'
import product15 from '../../images/sketch4.jpg'
import product16 from '../../images/sketch5.jpg'
import product17 from '../../images/sketch6.jpg'
import product18 from '../../images/sketch7.jpg'
import product54 from '../../images/sketch8.jpg'
import product55 from '../../images/sketch9.png'
import product56 from '../../images/sketch10.jpg'
import product57 from '../../images/sketch11.jpg'
import product58 from '../../images/sketch12.jpg'
import product59 from '../../images/sketch13.jpg'
import product60 from '../../images/sketch14.jpg'

const sketchProducts = [
  {
    id: 26,
    title: "Pencil Sketch Portrait",
    price: "₹2,500",
    location: "Delhi, India",
    date: "Today",
    image: product13, // Replace with actual image URL
  },
  {
    id: 27,
    title: "Handmade Charcoal Sketch",
    price: "₹4,299",
    location: "Mumbai, Maharashtra",
    date: "Yesterday",
    image: product14,
  },
  {
    id: 28,
    title: "Realistic Graphite Drawing",
    price: "₹3,800",
    location: "Chennai, Tamil Nadu",
    date: "Feb 25",
    image:product15,
  },
  {
    id: 29,
    title: "Modern Lady Sketch",
    price: "₹2,999",
    location: "Bangalore, Karnataka",
    date: "mar 2",
    image: product16,
  },
  {
    id: 30,
    title: "Women Sketch",
    price: "₹4,889",
    location: "Bhopal (Capital); Indore",
    date: "dec 30",
    image: product17,
  },
  {
    id: 31,
    title: "Dog Sketch",
    price: "₹1,789",
    location: "Kolkata (Capital); Darjeeling",
    date: "may 24",
    image: product18,
  },
  {
    id: 32,
    title: "Free hand Sketch",
    price: "₹4,994",
    location: "Dehradun (Winter Capital); Nainital",
    date: "jun 10",
    image: product54,
  },
  {
    id: 33,
    title: "A Bird Sketch",
    price: "₹1,996",
    location: "Chennai (Capital); Maduraia",
    date: "aug 18",
    image: product55,
  },
  {
    id: 34,
    title: "A Lady Sketch",
    price: "₹4,459",
    location: "Jaipur (Capital); Udaipur",
    date: "sep 26",
    image: product56,
  },
  {
    id: 35,
    title: "Horse Sketch",
    price: "₹1,469",
    location: "Bhubaneswar (Capital); Puri",
    date: "jan 16",
    image: product57,
  },
  {
    id: 36,
    title: "Dog Sketch",
    price: "₹1,449",
    location: "Kohima (Capital); Dimapur",
    date: "oct 11",
    image: product58,
  },
  {
    id: 37,
    title: "Hair Sketch",
    price: "₹1,799",
    location: "Bhopal (Capital); Indore",
    date: "jan 22",
    image: product59,
  },
  {
    id: 38,
    title: "Shadow Sketch",
    price: "₹2,459",
    location: "Mumbai (Capital); Nagpur",
    date: "sep 23",
    image: product60,
  },
 
];

const SketchesPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Sketches Collection</h2>
      {/* <p>Explore a variety of handmade sketches available for sale.</p> */}
      
      <Row>
        {sketchProducts.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.title} className="h-1"/>
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

export default SketchesPage;
