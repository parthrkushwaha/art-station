import React from "react";
import './BrushesPage.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import product31 from '../../images/brushes14.jpg'
import product32 from '../../images/brushes2.png'
import product33 from '../../images/brushes3.jpg'
import product34 from '../../images/brushes4.jpg'
import product35 from '../../images/brushes5.jpg'
import product36 from '../../images/brushes6.jpg'
import product48 from '../../images/brushes7.jpg'
import product49 from '../../images/brushes8.jpg'
import product50 from '../../images/brushes9.jpg'
import product51 from '../../images/brushes10.jpg'
import product52 from '../../images/brushes11.jpg'
import product53 from '../../images/brushes13.jpg'
const brushesProducts = [
  {
    id: 60,
    title: "Premium Acrylic Paint Brushes Set",
    price: "₹1,200",
    location: "Delhi, India",
    date: "Today",
    image:product31, // Replace with actual image URL
  },
  {
    id: 61,
    title: "Professional Watercolor Brushes",
    price: "₹1,800",
    location: "Mumbai, Maharashtra",
    date: "Yesterday",
    image:product32,
  },
  {
    id: 62,
    title: "Oil Painting Brush Kit",
    price: "₹2,500",
    location: "Bangalore, Karnataka",
    date: "Feb 15",
    image: product33,
  },
  {
    id: 63,
    title: "Synthetic & Natural Bristle Brush Set",
    price: "₹4,999",
    location: "Gandhinagar (Capital); Ahmedabad",
    date: "Feb 27",
    image: product34,
  },
  {
    id: 64,
    title: "Winsor & Newton Series 7 Kolinsky Sable Brush",
    price: "₹5,999",
    location: "Chandigarh (Capital); Faridabad",
    date: "sep 20",
    image: product35,
  },
  {
    id: 65,
    title: "Da Vinci Maestro Kolinsky Red Sable Brush",
    price: "₹1,599",
    location: "Ranchi (Capital); Jamshedpur",
    date: "nov 10",
    image: product36,
  },
  {
    id: 66,
    title: "Synthetic & Natural Bristle Brush Set",
    price: "₹1,979",
    location: "Bangalore, Karnataka",
    date: "mar 10",
    image: product48,
  },
  {
    id: 67,
    title: "Princeton Aqua Elite Synthetic Sable Brush",
    price: "₹1,909",
    location: "Bhopal (Capital); Indore",
    date: "jan 20",
    image: product49,
  },
  {
    id: 68,
    title: "Synthetic & Natural Bristle Brush Set",
    price: "₹1,449",
    location:  "Pune, Maharashtra",
    date: "dec 3",
    image: product50,
  },
  {
    id: 69,
    title: "Raphael Softaqua Synthetic Watercolor Brush",
    price: "₹1,339",
    location: "Chennai, Tamil Nadu",
    date: "aug 5",
    image: product51,
  },
  {
    id: 70,
    title: "Synthetic & Natural Bristle Brush Set",
    price: "₹1,099",
    location: "Mumbai (Capital); Nagpur",
    date: "nov 14",
    image: product52,
  },
  {
    id: 71,
    title: "Escoda Prado Tame Synthetic Brush",
    price: "₹3,959",
    location: " Pune, Maharashtra",
    date: "Feb 5",
    image: product53,
  },

];

const BrushesPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Brushes Collection</h2>
      {/* <p>Explore high-quality brushes for acrylic, oil, and watercolor painting.</p> */}
      
      <Row>
        {brushesProducts.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.title} className="h-5" />
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

export default BrushesPage;
