import React, { useState } from "react";
import { Dropdown,  } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CategoryNavbar.css";
const CategoryNavbar = () => {
    const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="category-navbar d-flex align-items-center justify-content-center flex-wrap">
      {/* Dropdown for Categories */}
      {/* <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)} className="category-dropdown"> */}
        <Dropdown.Toggle variant="light" className="fw-bold bg-light border-light">
          ALL CATEGORIES 
        </Dropdown.Toggle>

        {/* <Dropdown.Menu >
        <Dropdown.Item onClick={() => navigate("/painting")}>Painting</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/sketches")}>Sketches</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/sketchbook")}>Sketchbook</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/graphitepencil")}>Graphite Pencil</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/brushes")}>Brushes</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/watercolor")}>Watercolor</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/charcoals")}>Charcoals</Dropdown.Item>
        </Dropdown.Menu> */}
      {/* </Dropdown> */}

      {/* Additional Links */}
      <div className="ms-3">
      <span className="mx-2 " onClick={() => navigate("/painting")} style={{ cursor: "pointer", color: "black" }}>
          Painting
        </span>
        <span className="mx-2"  onClick={() => navigate("/sketches")} style={{ cursor: "pointer", color: "black" }}>Sketches</span>
        <span className="mx-2" onClick={() => navigate("/sketchbook")} style={{ cursor: "pointer", color: "black" }}>Sketchbook</span>
        <span className="mx-2"  onClick={() => navigate("/graphitepencil")} style={{ cursor: "pointer", color: "black" }}>Graphite Pencil</span>
        <span className="mx-2" onClick={() => navigate("/brushes")} style={{ cursor: "pointer", color: "black" }}>Brushes</span>
        <span className="mx-2" onClick={() => navigate("/watercolor")} style={{ cursor: "pointer", color: "black" }}>Watercolor</span>
        <span className="mx-2" onClick={() => navigate("/charcoals")} style={{ cursor: "pointer", color: "black" }}>Charcoals</span>
      </div>
    </div>
  );
};

export default CategoryNavbar;
