import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order/Order";
import styles from "./App.module.css";
import PizzaOfTheDay from "./PizzaOfTheDay/PizzaOfTheDay";

const App = () => {
  return (
    <StrictMode>
      <div className={`${styles.app} ${styles.columns}`}>
        <div className={styles.column}>
          <h1 className={styles.title}>Which pizza you wanna eat today?</h1>
          <Order />
        </div>
        <div className={styles.column}>
          <PizzaOfTheDay />
        </div>
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
