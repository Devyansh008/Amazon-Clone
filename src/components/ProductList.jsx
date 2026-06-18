// =============================================
// ProductList Component
// Renders a grid of ProductCard components.
// Also includes category filter buttons.
// =============================================

import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart, selectedCategory, onCategoryChange }) {
  // List of all available categories for the filter buttons
  const categories = ["All", "Electronics", "Fashion", "Books", "Home & Kitchen", "Sports"];

  return (
    <section className="product-list-section">
      {/* Category filter buttons */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product count */}
      <div className="product-count">
        <p>
          Showing <strong>{products.length}</strong> {products.length === 1 ? "result" : "results"}
        </p>
      </div>

      {/* Show a message if no products match the filters */}
      {products.length === 0 ? (
        <div className="no-results">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#999" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
            <line x1="8" y1="8" x2="14" y2="14" />
            <line x1="14" y1="8" x2="8" y2="14" />
          </svg>
          <p>No products found. Try a different search or category.</p>
        </div>
      ) : (
        /* Grid of product cards */
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
