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
      <h2 className={styles.heading}>
        🍕 The Pizza of the Day, <span>{pizzaOfTheDay.name}</span>
      </h2>
      <div className={styles.info}>
        <img
          className={styles.image}
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        />
        <div className={styles.aside}>
          <p className={styles.description}>{pizzaOfTheDay.description}</p>
          <h5 className={styles.price}>
            From: {intl.format(pizzaOfTheDay.sizes.S)}
          </h5>
        </div>
      </div>
    </div>
  );
}
