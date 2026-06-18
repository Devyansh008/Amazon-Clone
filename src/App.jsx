// =============================================
// App Component - Main entry point
// Manages the global state for:
//   - Cart items
//   - Search text filter
//   - Selected category filter
// Passes data and functions to child components.
// =============================================

import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";
import "./App.css";

function App() {
  // ---- State Variables ----

  // Stores items added to the cart
  // Each cart item has: id, name, price, image, quantity
  const [cartItems, setCartItems] = useState([]);

  // Stores the current search text entered by the user
  const [searchText, setSearchText] = useState("");

  // Stores the currently selected category (default is "All")
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Controls whether the cart panel is open or closed
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ---- Handler Functions ----

  // Adds a product to the cart
  // If the product already exists, increase its quantity by 1
  function handleAddToCart(product) {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Product exists → increase quantity
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      // Product is new → add it with quantity 1
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  }

  // Removes one quantity of a product from the cart
  // If quantity becomes 0, remove the item completely
  function handleRemoveFromCart(productId) {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove items with 0 quantity

    setCartItems(updatedCart);
  }

  // Updates the search text when user types or selects a suggestion
  function handleSearch(text) {
    setSearchText(text);
  }

  // Updates the selected category when user clicks a filter button
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // ---- Filtering Logic ----

  // Filter products based on both search text and selected category
  let filteredProducts = products;

  // Step 1: Filter by category (skip if "All" is selected)
  if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Step 2: Filter by search text (skip if search is empty)
  if (searchText.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // ---- Calculate total cart item count ----
  let cartCount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    cartCount += cartItems[i].quantity;
  }

  // ---- Render the App ----
  return (
    <div className="app">
      {/* Top navigation bar */}
      <Navbar
        products={products}
        onSearch={handleSearch}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero banner section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Shop the Best Deals</h1>
          <p>Discover amazing products at unbeatable prices</p>
        </div>
      </section>

      {/* Main content area with products */}
      <main className="main-content">
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </main>

      {/* Slide-out cart panel */}
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to Top
          </button>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Get to Know Us</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect with Us</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Make Money with Us</h4>
            <ul>
              <li><a href="#">Sell on Amazon</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Advertise Products</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Let Us Help You</h4>
            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Returns Centre</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Amazon Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
