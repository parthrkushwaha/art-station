import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Charcoals.css';
import product42 from '../../images/charcoal1.jpg'
import product43 from '../../images/charcoal2.jpg'
import product44 from '../../images/charcoal3.jpg'
import product45 from '../../images/charcoal4.png'
import product46 from '../../images/charcoal5.jpg'
import product47 from '../../images/charcoal6.jpg'
const charcoalProducts = [
  {
    id: 84,
    title: "Professional Charcoal Pencil Set",
    price: "₹1,500",
    location: "Delhi, India",
    date: "Today",
    image: product42, // Replace with actual image URL
  },
  {
    id: 85,
    title: "Compressed Charcoal Sticks",
    price: "₹900",
    location: "Mumbai, Maharashtra",
    date: "Yesterday",
    image: product43,
  },
  {
    id: 86,
    title: "Willow Charcoal for Sketching",
    price: "₹750",
    location: "Bangalore, Karnataka",
    date: "nov 6",
    image: product44,
  },
  {
    id: 87,
    title: "Charcoal Powder for Shading",
    price: "₹1,200",
    location: "Chennai, Tamil Nadu",
    date: "jan 27",
    image: product45,
  },
  {
    id: 88,
    title: "General's Classic Willow Charcoal",
    price: "₹900",
    location: "Amaravati (Capital); Visakhapatnam",
    date: "dec 24",
    image: product46,
  },
  {
    id: 89,
    title: "",
    price: "₹500",
    location: "Itanagar (Capital)",
    date: "mar 5",
    image: product47,
  },
];

const CharcoalsPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Charcoals Collection</h2>
      {/* <p>Find high-quality charcoal pencils, sticks, and powders for artistic sketching.</p> */}
      
      <Row>
        {charcoalProducts.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.title} className="h-7" />
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

export default CharcoalsPage;
