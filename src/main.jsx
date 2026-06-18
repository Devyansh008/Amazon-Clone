// =============================================
// Entry Point - main.jsx
// This is where the React app starts.
// It renders the App component into the HTML.
// =============================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Find the root HTML element and render our App inside it
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
