import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div className="app">
      <h1 className="shop-title">Which pizza you wanna eat today?</h1>
      <Pizza
        name="Margherita Magic"
        description="Tomato sauce, fresh mozzarella, basil, olive oil"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Pepperoni Inferno"
        description="Spicy pepperoni, mozzarella, chili flakes, tomato sauce"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Veggie Supreme"
        description="Bell peppers, red onion, mushrooms, olives, spinach, mozzarella, tomato sauce"
        image="/public/pizzas/pepperoni.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
