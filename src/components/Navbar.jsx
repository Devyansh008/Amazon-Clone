// =============================================
// Navbar Component
// The top navigation bar that includes:
// - Amazon logo
// - Search bar
// - Cart icon with item count
// =============================================

import SearchBar from "./SearchBar";

function Navbar({ products, onSearch, cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      {/* Left section: Logo */}
      <div className="navbar-logo">
        <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); onSearch(""); }}>
          <span className="logo-text">amazon</span>
          <span className="logo-suffix">.clone</span>
        </a>
      </div>

      {/* Center section: Search bar */}
      <div className="navbar-search">
        <SearchBar products={products} onSearch={onSearch} />
      </div>

      {/* Right section: Cart */}
      <div className="navbar-actions">
        <button id="cart-button" className="cart-btn" onClick={onCartClick}>
          {/* Shopping cart SVG icon */}
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6h15l-1.5 9h-12z" />
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
            <path d="M1 1h4l1 5" />
          </svg>
          {/* Show cart item count badge only when cart has items */}
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
          <span className="cart-label">Cart</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
