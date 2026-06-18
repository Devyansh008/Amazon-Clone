// =============================================
// SearchBar Component
// Handles user input and shows matching
// product suggestions in a dropdown list.
// =============================================

import { useState } from "react";

function SearchBar({ products, onSearch }) {
  // State to track what the user types in the search box
  const [searchText, setSearchText] = useState("");

  // State to control whether the suggestions dropdown is visible
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter products whose name includes the typed text (case-insensitive)
  const suggestions = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Called every time the user types in the search input
  function handleInputChange(event) {
    const value = event.target.value;
    setSearchText(value);

    // Show suggestions only when the user has typed something
    if (value.trim().length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      // When search is cleared, show all products
      onSearch("");
    }
  }

  // Called when the user clicks on a suggestion
  function handleSuggestionClick(productName) {
    setSearchText(productName);
    setShowSuggestions(false);
    // Tell the parent component to filter by this product name
    onSearch(productName);
  }

  // Called when the user clicks the search button
  function handleSearchClick() {
    setShowSuggestions(false);
    onSearch(searchText);
  }

  // Called when the user presses Enter in the search box
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShowSuggestions(false);
      onSearch(searchText);
    }
  }

  // Called when the user clicks the clear (X) button
  function handleClear() {
    setSearchText("");
    setShowSuggestions(false);
    onSearch("");
  }

  return (
    <div className="search-bar">
      {/* The search input field */}
      <div className="search-input-wrapper">
        <input
          id="search-input"
          type="text"
          placeholder="Search Amazon Clone"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (searchText.trim().length > 0) setShowSuggestions(true);
          }}
          autoComplete="off"
        />

        {/* Show a clear button when there is text in the input */}
        {searchText && (
          <button className="search-clear-btn" onClick={handleClear} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>

      {/* Search button with magnifying glass icon */}
      <button id="search-button" className="search-btn" onClick={handleSearchClick}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </button>

      {/* Dropdown list of matching suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.slice(0, 8).map((product) => (
            <li
              key={product.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(product.name)}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#888" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
