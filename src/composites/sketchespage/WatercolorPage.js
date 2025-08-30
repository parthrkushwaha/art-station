import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './WatercolorPage.css';
import product36 from '../../images/watercolor1.jpg'
import product37 from '../../images/watercolor2.jpg'
import product38 from '../../images/watercolor3.jpg'
import product39 from '../../images/watercolor4.jpg'
import product40 from '../../images/watercolor5.jpg'
import product41 from '../../images/watercolor6.jpg'
import product79 from '../../images/watercolor13.jpg'
import product80 from '../../images/watercolor8.jpg'
import product81 from '../../images/watercolor9.jpg'
import product82 from '../../images/watercolor10.jpg'
import product83 from '../../images/watercolor11.jpg'
import product84 from '../../images/watercolor12.jpg'
const watercolorProducts = [
  {
    id: 72,
    title: "Artist Watercolor Paint Set",
    price: "₹1,500",
    location: "Delhi, India",
    date: "Today",
    image: product36, // Replace with actual image URL
  },
  {
    id: 73,
    title: "Professional Watercolor Palette",
    price: "₹2,200",
    location: "Mumbai, Maharashtra",
    date: "Yesterday",
    image: product37,
  },
  {
    id: 74,
    title: "Watercolor Paint Tubes Set",
    price: "₹1,820",
    location: "Bangalore, Karnataka",
    date: "feb 25",
    image: product38,
  },
  {
    id: 75,
    title: "Travel Watercolor Painting Kit",
    price: "₹1,299",
    location: "Chennai, Tamil Nadu",
    date: "apr 1",
    image: product39,
  },
  {
    id: 76,
    title: "Winsor & Newton Professional Watercolor",
    price: "₹1,444",
    location: "Dispur (Capital); Guwahati",
    date: "dec 2",
    image: product40,
  },
  {
    id: 77,
    title: "Schmincke Horadam Aquarell Watercolor",
    price: "₹2,129",
    location: "Patna (Capital); Bodh Gaya",
    date: "jan 26",
    image: product41,
  },
  {
    id: 78,
    title: "M. Graham & Co. Artists' Watercolor",
    price: "₹1,959",
    location: "Raipur (Capital); Bhilai",
    date: "may 30",
    image: product79,
  },
  {
    id: 79,
    title: "Holbein Artists' Watercolo",
    price: "₹1,859",
    location: "Panaji (Capital); Vasco da Gama",
    date: "oct 31",
    image: product80,
  },
  {
    id: 80,
    title: "Van Gogh Watercolor by Royal Talens",
    price: "₹2,999",
    location: "Chennai, Tamil Nadu",
    date: "mar 25",
    image: product81,
  },
  {
    id: 81,
    title: "Old Holland Classic Watercolor",
    price: "₹1,399",
    location: "Gandhinagar (Capital); Ahmedabad",
    date: "jan 34",
    image: product82,
  },
  {
    id: 82,
    title: "White Nights Watercolor by Nevskaya Palitra",
    price: "₹1,949",
    location: "Ranchi (Capital); Jamshedpur",
    date: "dec 20",
    image: product83,
  },
  {
    id: 83,
    title: "PrimaTek Watercolor by Daniel Smith",
    price: "₹1,998",
    location: "Chandigarh (Capital); Faridabad",
    date: "Apr 10",
    image: product84,
  },
];

const WatercolorPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Watercolor Collection</h2>
      {/* <p>Discover a variety of high-quality watercolor paints and sets.</p> */}
      
      <Row>
        {watercolorProducts.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.title} className="h-6" />
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

export default WatercolorPage;
