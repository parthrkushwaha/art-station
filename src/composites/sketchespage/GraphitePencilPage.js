import React from "react";
import './GraphitePencilPage.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import product25 from '../../images/Grapencil1.jpg'
import product26 from '../../images/Grapencil2.jpg'
import product27 from '../../images/Grapencil3.jpg'
import product28 from '../../images/Grapencil4.jpg'
import product29 from '../../images/Grapencil5.jpg'
import product30 from '../../images/Grapencil6.jpg'
import product64 from '../../images/Grapencil7.jpg'
import product65 from '../../images/Grapencil8.jpg'
import product66 from '../../images/Grapencil9.jpg'
import product67 from '../../images/Grapencil10.jpg'
import product68 from '../../images/Grapencil11.jpg'
import product69 from '../../images/Grapencil12.jpg'

const graphitePencilProducts = [
  {
    id: 48,
    title: "Graphite Pencil Drawing - Portrait",
    price: "₹3,200",
    location: "Hyderabad, India",
    date: "Today",
    image: product25, // Replace with actual image URL
  },
  {
    id: 49,
    title: "Realistic Graphite Artwork",
    price: "₹5,000",
    location: "Pune, Maharashtra",
    date: "Yesterday",
    image: product26,
  },
  {
    id: 50,
    title: "Shading Sketch with Graphite",
    price: "₹2,750",
    location: "Chennai, Tamil Nadu",
    date: "jun 23",
    image: product27,
  },
  {
    id: 51,
    title: "Detailed Graphite Pencil Sketch",
    price: "₹3,900",
    location: "Bangalore, Karnataka",
    date: "nov 20",
    image: product28,
  },
  {
    id: 52,
    title: "Staedtler Mars Lumograph Graphite Pencil",
    price: "₹3,550",
    location: "Chandigarh (Capital); Amritsar",
    date: "jan 3",
    image: product29,
  },
  {
    id: 53,
    title: "Faber-Castell Castell 9000 Graphite Pencil",
    price: "₹4,440",
    location:  "Hyderabad, India",
    date: "nov 2",
    image: product30,
  },
  {
    id: 54,
    title: "Detailed Graphite Pencil Sketch",
    price: "₹3,500",
    location:  "Pune, Maharashtra",
    date: "apr 28",
    image: product64,
  },
  {
    id: 55,
    title: "Derwent Graphic Graphite Pencil",
    price: "₹1,900",
    location: "Gangtok (Capital); Pelling",
    date: "mar 19",
    image: product65,
  },
  {
    id: 56,
    title: "Prismacolor Turquoise Graphite Pencil",
    price: "₹1,500",
    location: "Chennai (Capital); Madurai",
    date: "july 16",
    image: product66,
  },
  {
    id: 57,
    title: "General's Layout Graphite Pencil",
    price: "₹5,900",
    location: "Hyderabad (Capital); Warangal",
    date: "dec 9",
    image: product67,
  },
  {
    id: 58,
    title: "Tombow Mono Professional Drawing Pencil",
    price: "₹1,500",
    location: "Lucknow (Capital); Varanasi",
    date: "sep 2",
    image: product68,
  },
  {
    id: 59,
    title: "Caran d'Ache Grafwood Pencil",
    price: "₹1,950",
    location: "Dehradun (Winter Capital); Nainital",
    date: "apr 6",
    image: product69,
  },
];

const GraphitePencilPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">Graphite Pencil Collection</h2>
      {/* <p>Discover high-quality graphite pencil drawings created by talented artists.</p> */}
      
      <Row>
        {graphitePencilProducts.map((product) => (
          <Col key={product.id} md={4} sm={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.title} className="h-3" />
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

export default GraphitePencilPage;
