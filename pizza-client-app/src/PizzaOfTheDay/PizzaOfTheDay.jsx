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
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.name}>{pizzaOfTheDay.name}</div>
          <p className={styles.description}>
            Hot, Fresh & Loaded with Flavor 🍕 — Dive into the ultimate pizza
            experience with our handcrafted, oven-baked pies made from the
            freshest ingredients. Whether you’re a fan of spicy pepperoni,
            cheesy classics, or bold new flavors — we’ve got a slice with your
            name on it!
            {pizzaOfTheDay.description}
          </p>
          <h5 className={styles.price}>
            From: {intl.format(pizzaOfTheDay.sizes.S)}
          </h5>
        </div>
        <div className={styles.graphics}>
          <img
            className={styles.image}
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
          />
        </div>
      </div>
    </div>
  );
}
