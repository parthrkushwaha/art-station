import React from "react";
import { useNavigate } from "react-router-dom";
// import "./style.css";
// import Card from "../../components/Card";

// Import Product Images
import product1 from "../../images/painting1.jpg";
import product2 from "../../images/brushes3.jpg";
import product3 from "../../images/sketchbook1.jpg";
import product4 from "../../images/painting2.jpg";
import product5 from "../../images/painting3.jpg";
import product6 from "../../images/sketch1.jpg";
import product7 from "../../images/painting4.jpg";
import product8 from "../../images/watercolor1.jpg";
import product9 from "../../images/Grapencil1.jpg";
import product10 from "../../images/painting5.jpg";
import product11 from "../../images/watercolor2.jpg";
import product12 from "../../images/watercolor3.jpg";

const ProductList = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            image: product1,
            title: "Acrylic Paint Set - 24 Colors",
            price: "2999",
            details: "High-quality acrylic paints with vibrant colors.",
            location: "Mumbai, Maharashtra",
            date: "FEB 20"
        },
        {
            id: 2,
            image: product2,
            title: "Professional Watercolor Brushes - Set of 10",
            price: "3099",
            details: "Soft and durable watercolor brushes for artists.",
            location: "Chennai, Tamil Nadu",
            date: "FEB 18"
        },
        {
            id: 3,
            image: product3,
            title: "Premium Sketchbook - A4 Size",
            price: "2799",
            details: "Smooth paper ideal for sketching and drawing.",
            location: "Bangalore, Karnataka",
            date: "FEB 15"
        },
        {
            id: 4,
            image: product4,
            title: "Wooden Tabletop Easel",
            price: "3299",
            details: "Compact and adjustable easel for artists.",
            location: "Delhi, India",
            date: "FEB 12"
        },
        {
            id: 5,
            image: product5,
            title: "Oil Paint Set - 12 Colors",
            price: "2999",
            details: "Rich pigmented oil paints for professional use.",
            location: "Mumbai, Maharashtra",
            date: "FEB 10"
        },
        {
            id: 6,
            image: product6,
            title: "Charcoal Drawing Set - 15 Pieces",
            price: "2499",
            details: "Complete charcoal drawing set for beginners and professionals.",
            location: "Bangalore, Karnataka",
            date: "FEB 08"
        },
        {
            id: 7,
            image: product7,
            title: "Canvas Panel - 10 Pack",
            price: "3499",
            details: "High-quality canvas panels for acrylic and oil painting.",
            location: "Delhi, India",
            date: "FEB 05"
        },
        {
            id: 8,
            image: product8,
            title: "Artist Palette - Wooden",
            price: "3099",
            details: "Classic wooden artist palette for mixing paints.",
            location: "Chennai, Tamil Nadu",
            date: "FEB 02"
        },
        {
            id: 9,
            image: product9,
            title: "Calligraphy Pen Set",
            price: "2799",
            details: "Elegant calligraphy pen set with different nibs.",
            location: "Pune, Maharashtra",
            date: "JAN 30"
        },
        {
            id: 10,
            image: product10,
            title: "Digital Drawing Tablet",
            price: "3299.99",
            details: "Graphic drawing tablet with pen for digital artists.",
            location: "Hyderabad, India",
            date: "JAN 28"
        },
        {
            id: 11,
            image: product11,
            title: "Acrylic Paint Set - 24 Colors",
            price: "3099",
            details: "High-quality acrylic paints with vibrant colors.",
            location: "Hyderabad, India",
            date: "FEB 25"
        },
        {
            id: 12,
            image: product12,
            title: "Professional Watercolor Brushes - Set of 10",
            price: "3099",
            details: "Soft and durable watercolor brushes for artists.",
            location: "Pune, Maharashtra",
            date: "FEB 20"
        },
    ];

    return (
        <div className="p-6 mt-5">
            <h1 className="text-2xl font-semibold mb-3 ms-5 mt-1">Fresh Recommendations</h1>
            <div className="d-flex justify-content-center gap-4 me-5 p-8 flex-wrap">
                {products.map((product) => (
                    <div className="card shadow-sm" style={{ width: "18rem" }} key={product.id}>
                        <img src={product.image} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Price: ₹{product.price}</p>
                            <button className="btn btn-primary" onClick={() => navigate(`/product/${product.id}`)}>
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
