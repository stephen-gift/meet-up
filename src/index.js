import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FavouritesContextProvider } from "./Store/FavouritesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavouritesContextProvider>
      <App />
    </FavouritesContextProvider>
  </React.StrictMode>
);
