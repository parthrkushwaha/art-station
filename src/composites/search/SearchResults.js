import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchResults = ({ products }) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase() || "";
    const filteredProducts = query
        ? products.filter((product) => {
            const nameMatch = product.name?.toLowerCase().includes(query);
            const descMatch = product.description?.toLowerCase().includes(query);
            const catMatch = product.category?.toLowerCase().includes(query);
            console.log("Search query:", query);
            console.log(`Product ${product.name}: name=${nameMatch}, desc=${descMatch}, cat=${catMatch}`);
            return nameMatch || descMatch || catMatch|| JSON.stringify(product).toLowerCase().includes(query);
        })
        : products;
        console.log("Filtered products:", filteredProducts)
        console.log("Product names:", products.map(p => p.name));

    return (
        <Container className="mt-4">
            <h2 className="mb-3">Search Results for "{query || "All Products"}"</h2>
            {filteredProducts.length === 0 ? (
                <div className="text-center py-5">
                    <p className="h5 mb-3">No products found for "{query}".</p>
                    <p className="text-muted">
                        Try searching for something else, like "painting" or "brushes".
                    </p>
                    <Button as={Link} to="/" variant="outline-primary">
                        Back to Home
                    </Button>
                </div>
            ) : (
                <Row>
                    {filteredProducts.map((product) => (
                        <Col key={product.id} md={4} sm={6} className="mb-4">
                            <Card className="shadow-sm h-100">
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    alt={product.name}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>₹{product.price}</Card.Title>
                                    <Card.Text>{product.name}</Card.Text>
                                    <Card.Text className="text-muted">{product.location}</Card.Text>
                                    <Button variant="primary" as={Link} to={`/product/${product.id}`}>
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default SearchResults;