import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Vérifie que le chemin est correct
import "./index.css"; // Assure-toi que Tailwind est bien importé

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
