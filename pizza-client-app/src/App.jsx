import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order/Order";
import "./Style.css";

const App = () => {
  return (
    <StrictMode>
      <div className="app">
        <h1 className="shop-title">Which pizza you wanna eat today?</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
