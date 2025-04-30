import React from "react";
import { useNavigate,Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";
import { FaSearch, FaHeart, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Imag from "../images/Alogo.png";
import "./Navbar.css";

const CustomNavbar = ({ cartLength }) => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-2 sticky-top">
      <Container>
        {/* Logo - Click to go to Home */}
        <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={Imag} alt="A Logo" width="50" height="50" />
        </Navbar.Brand>
        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Location Dropdown */}
          <Dropdown className="me-2">
            {/* <Dropdown.Toggle variant="light" id="dropdown-location" className="fs-4 mt-3 text-dark"> */}
              India
            {/* </Dropdown.Toggle> */}
         
          </Dropdown>

          {/* Search Bar */}
          <Form className="d-flex flex-grow-1 mx-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search 'Properties'"
              className="me-2"
              name="search"
              aria-label="Search"
            />
            <Button variant="dark" type="submit">
              <FaSearch />
            </Button>
          </Form>

          {/* Right Side Icons & Buttons */}
          <Nav className="ms-auto d-flex align-items-center">
            {/* Cart Icon */}
            <Nav.Link as={Link} to="/cart" className="me-3 position-relative">
              <FaShoppingCart size={20} />
              {cartLength > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartLength}
                </span>
              )}
            </Nav.Link>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <>
                <span className="me-3">{user.name}</span>
                <Button
                  variant="danger"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </Button>
              </>
            ) : (
              <Button variant="danger" onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}

            {/* SELL Button */}
            <Button
              variant="warning"
              className="rounded-pill d-flex align-items-center px-3 ms-3"
              as={Link}
              to="/sell"
            >
              <FaPlus className="me-1" /> SELL
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;