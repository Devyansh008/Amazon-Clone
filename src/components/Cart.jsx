// =============================================
// Cart Component
// Shows a slide-out panel with all items
// currently added to the cart. Allows removing
// individual items.
// =============================================

function Cart({ cartItems, onRemoveFromCart, isOpen, onClose }) {
  // Calculate the total price of all items in the cart
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price * cartItems[i].quantity;
  }

  // Calculate total number of items (including duplicates)
  let totalItems = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalItems += cartItems[i].quantity;
  }

  return (
    <>
      {/* Dark overlay behind the cart panel */}
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      {/* Cart slide-out panel */}
      <div className={`cart-panel ${isOpen ? "open" : ""}`}>
        {/* Cart header */}
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {/* Cart items list */}
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#ccc" strokeWidth="1">
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M1 1h4l1 5" />
            </svg>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                {/* Item image */}
                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add("image-fallback-small");
                    }}
                  />
                </div>

                {/* Item details */}
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">₹{item.price.toLocaleString("en-IN")}</p>
                  <p className="cart-item-qty">Qty: {item.quantity}</p>
                </div>

                {/* Remove button */}
                <button
                  className="cart-remove-btn"
                  onClick={() => onRemoveFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Cart footer with totals */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-items">
              Total Items: <strong>{totalItems}</strong>
            </div>
            <div className="cart-total-price">
              Subtotal: <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
