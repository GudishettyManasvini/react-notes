import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import Test from "./components/Test.jsx";
createRoot(document.getElementById("root")).render(<App />);