import { useState, useEffect } from "react";
import Pizza from "../Pizza/Pizza";
import styles from "./Order.module.css";

// Currency Conversion built-in browser
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className={styles.order}>
      <div className={styles.orderForm}>
        <h1 className={styles.title}>Which pizza you wanna eat today?</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="pizza-type" className={styles.formLabel}>
              Pizza Type
            </label>
            <select
              id="pizza-type"
              name="pizza-type"
              value={pizzaType}
              className={styles.selectInput}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Pizza Size</label>
            <div className={styles.formRadioGroup}>
              <label htmlFor="pizza-s" className={styles.formRadioLabel}>
                <input
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  checked={pizzaSize === "S"}
                  className={styles.radioInput}
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                Small
              </label>

              <label htmlFor="pizza-m" className={styles.formRadioLabel}>
                <input
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  checked={pizzaSize === "M"}
                  className={styles.radioInput}
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                Medium
              </label>

              <label htmlFor="pizza-l" className={styles.formRadioLabel}>
                <input
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  checked={pizzaSize === "L"}
                  className={styles.radioInput}
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                Large
              </label>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Add to Cart
          </button>
        </form>
      </div>

      <div className={styles.orderPreview}>
        {selectedPizza ? (
          <Pizza
            name={selectedPizza.name}
            description={selectedPizza.description}
            image={selectedPizza.image}
          />
        ) : null}
        <p className={styles.orderPrice}>Price: {price}</p>
      </div>
    </div>
  );
}
