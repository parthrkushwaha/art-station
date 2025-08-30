import React from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProductDetails = ({ products, addToCart, itemCount }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id.toString() === id);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!product) {
    return <h2 className="text-center">Product not found!</h2>;
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("Please log in to add items to your cart!");
      loginWithRedirect();
      return;
    }
    if (addToCart && itemCount < 10) {
      addToCart(product);
    } else if (itemCount >= 10) {
      alert(`Maximum limit of 10 items reached!`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img src={product.image} className="img-fluid rounded shadow h-1" alt={product.name} />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-danger">Limited Time Deal</h4>
          <h3 className="text-primary">
            ₹{product.price} <small className="text-muted"><del>₹{product.originalPrice}</del></small>
          </h3>

          <p><strong>Location:</strong> {product.location}</p>
          <p><strong>Description:</strong> {product.description}</p>

          {/* Buy & Cart Buttons */}
          <div className="mt-3">
            <button className="btn btn-warning me-2">Buy Now</button>
            <button
              className="add-to-cart bg-success text-red px-3 py-1 rounded hover:bg-danger transition"
              onClick={handleAddToCart}
              disabled={itemCount >= 10}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Specifications Section */}
      <div className="mt-5 p-3 bg-white rounded border">
        <h4>Product Details</h4>
        <table className="table">
          <tbody>
            <tr>
              <td><strong>Size</strong></td>
              <td>{product.size}</td>
            </tr>
            <tr>
              <td><strong>Product Dimensions</strong></td>
              <td>{product.dimensions}</td>
            </tr>
            <tr>
              <td><strong>Number of Items</strong></td>
              <td>{product.items}</td>
            </tr>
            <tr>
              <td><strong>Orientation</strong></td>
              <td>{product.orientation}</td>
            </tr>
            <tr>
              <td><strong>Shape</strong></td>
              <td>{product.shape}</td>
            </tr>
            <tr>
              <td><strong>Theme</strong></td>
              <td>{product.theme}</td>
            </tr>
            <tr>
              <td><strong>Recommended Uses</strong></td>
              <td>{product.uses}</td>
            </tr>
            <tr>
              <td><strong>Frame Type</strong></td>
              <td>{product.frameType}</td>
            </tr>
            <tr>
              <td><strong>Wall Art Form</strong></td>
              <td>{product.wallArtForm}</td>
            </tr>
            <tr>
              <td><strong>Material</strong></td>
              <td>{product.material}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* About This Item Section */}
      <div className="mt-5 p-3 bg-light rounded border">
        <h4>About this item</h4>
        <ul>
          {product.about.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;