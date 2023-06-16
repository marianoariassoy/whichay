import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LanguageProvider } from "./context/language.jsx";
import "./assets/css/main.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>
);
