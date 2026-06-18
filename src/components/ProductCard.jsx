// =============================================
// ProductCard Component
// Displays a single product with its image,
// name, price, rating stars, and an
// "Add to Cart" button.
// =============================================

function ProductCard({ product, onAddToCart }) {
  // Create an array of star characters based on the product rating
  // For example, rating 4 → ["★", "★", "★", "★", "☆"]
  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push("★"); // filled star
      } else {
        stars.push("☆"); // empty star
      }
    }
    return stars.join("");
  }

  return (
    <div className="product-card">
      {/* Product image */}
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            // If image fails to load, show a placeholder gradient
            e.target.style.display = "none";
            e.target.parentElement.classList.add("image-fallback");
          }}
        />
      </div>

      {/* Product details section */}
      <div className="product-info">
        {/* Category badge */}
        <span className="product-category">{product.category}</span>

        {/* Product name */}
        <h3 className="product-name">{product.name}</h3>

        {/* Product description */}
        <p className="product-description">{product.description}</p>

        {/* Star rating */}
        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="rating-count">({product.rating}/5)</span>
        </div>

        {/* Price */}
        <div className="product-price">
          <span className="price-symbol">₹</span>
          <span className="price-value">{product.price.toLocaleString("en-IN")}</span>
        </div>

        {/* Add to Cart button */}
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
