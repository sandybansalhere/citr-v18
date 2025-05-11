import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order/Order";
import styles from "./App.module.css";
import PizzaOfTheDay from "./PizzaOfTheDay/PizzaOfTheDay";
import Header from "./Header/Header";

const App = () => {
  return (
    <StrictMode>
      <Header />
      <div className={styles.app}>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
