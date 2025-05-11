import Pizza from "../Pizza/Pizza";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";
import styles from "./PizzaOfTheDay.module.css";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function PizzaOfTheDay() {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) return null;

  return (
    <div className={styles.pizzaOfTheDay}>
      <h2 className={styles.title}>Pizza of the Day!</h2>
      <Pizza
        name={pizzaOfTheDay.name}
        description={pizzaOfTheDay.description}
        image={pizzaOfTheDay.image}
      />
    </div>
  );
}
