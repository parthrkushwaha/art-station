import React from "react";
// import './PaintingPage.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import product9 from '../../images/painting6.jpg'
import product10 from '../../images/painting7.jpg'
import product11 from '../../images/painting8.jpg'
import product12 from '../../images/painting9.jpg'
import product70 from '../../images/painting10.jpg'
import product71 from '../../images/painting11.jpg'
import product72 from '../../images/painting11.jpg'
import product73 from '../../images/painting13.jpg'
import product74 from '../../images/painting14.jpg'
import product75 from '../../images/painting15.jpg'
import product76 from '../../images/painting16.jpg'
import product77 from '../../images/painting17.jpg'
import product78 from '../../images/painting18.jpg'

const paintingProducts = [
  {
    id: 13,
    title: "Abstract Art Painting",
    price: "₹3,499",
    location: "Mumbai, Maharashtra",
    date: "Today",
    image: product9, // Replace with actual image URL
  },
  {
    id: 14,
    title: "Handmade Landscape Painting",
    price: "₹3,299",
    location: "Delhi, India",
    date: "Yesterday",
    image: product10,
  },
  {
    id: 15,
    title: "Modern Wall Canvas",
    price: "₹3,299",
    location: "Bangalore, Karnataka",
    date: "mar 25",
    image: product11,
  },
  {
    id: 16,
    title: "Watercolor Portrait",
    price: "₹3,299",
    location: "Kolkata, India",
    date: "dec 4",
    image: product12,
  },
  {
    id: 17,
    title: "Watercolor Boat and Sea",
    price: "₹3,299",
    location: "Bihar, India",
    date: "aug 15",
    image: product70,
  },
  {
    id: 18,
    title: "Watercolor Tree",
    price: "₹2,99",
    location: "Uttrakhand, India",
    date: "jun 20",
    image: product71,
  },
  {
    id: 19,
    title: "Watercolor Bridge",
    price: "₹1,959",
    location: "Arunachal, India",
    date: "oct 10",
    image: product72,
  },
  {
    id: 20,
    title: "Watercolor Horses",
    price: "₹92,999",
    location: "Delhi, India",
    date: "apr 2",
    image: product73,
  },
  {
    id: 21,
    title: "Watercolor Fish",
    price: "₹2,685",
    location: "Kolkata, India",
    date: "mar 20",
    image: product74,
  },
  {
    id: 22,
    title: "Watercolor Portrait",
    price: "₹20,999",
    location: "Uttrakhand, India",
    date: "Feb 29",
    image: product75,
  },
  {
    id: 23,
    title: " Fox painting",
    price: "₹1,599",
    location: "Bihar, India",
    date: "mar 30",
    image: product76,
  },
  {
    id: 24,
    title: "Watercolor window",
    price: "₹1,529",
    location: "Kolkata, India",
    date: "apr 2",
    image: product77,
  },
  {
    id: 25,
    title: "Wall Art",
    price: "₹999",
    location: "Maharashtra, India",
    date: "dec 21",
    image: product78,
  },
];

const PaintingPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Painting Collection</h2>
      {/* <p>Explore a wide range of paintings available for sale.</p> */}
      
      <Row>
        {paintingProducts.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.title} className="h-1" />
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

export default PaintingPage;

