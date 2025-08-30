import React, { useState, useEffect } from "react";
// import "./Cart.css"; // Optional: Add custom CSS if needed

const Cart = ({ products, addToCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  // Add product to cart
//   const handleAddToCart = (product) => {
//     const existingItem = cartItems.find((item) => item.id === product.id);
//     if (existingItem) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//     setTotalPrice(totalPrice + product.price);
//     setItemCount(itemCount + 1);
//   };

  // Remove item from cart
  const handleRemoveItem = (id, price) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (itemToRemove) {
      if (itemToRemove.quantity > 1) {
        setCartItems(
          cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
        setTotalPrice(totalPrice - price);
        setItemCount(itemCount - 1);
      } else {
        setCartItems(cartItems.filter((item) => item.id !== id));
        setTotalPrice(totalPrice - price);
        setItemCount(itemCount - 1);
      }
    }
  };

  // Sync with parent addToCart prop (if needed)
  useEffect(() => {
    if (addToCart) {
      addToCart(cartItems);
    }
  }, [cartItems, addToCart]);

  return (
    <div className="cart-container pt-4 ">
      <h2 className="d-flex justify-content-center">Shopping Cart</h2>
      {itemCount > 0 ? (
        <ul id="cart-items" className="cart-items-list">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2 px-3 rounded-lg bg-white shadow-sm border"
            >
              <span className="font-semibold text-gray-700">
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              </span>
              <button
                className="bg-red-800 text-red px-3 py-1 text-danger rounded-lg hover:bg-red-100 transition remove-item"
                onClick={() => handleRemoveItem(item.id, item.price)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="d-flex justify-content-center">Your cart is empty.</p>
      )}
      <div className="cart-summary">
        <p className="d-flex justify-content-center">Total Price: $<span id="total-price">{totalPrice.toFixed(2)}</span></p>
        <div id="cart-count " className={`cart-count d-flex justify-content-center ${itemCount === 0 ? "hidden" : ""}`}>
          Items: {itemCount}
        </div>
      </div>
    
    </div>
  );
};

export default Cart;