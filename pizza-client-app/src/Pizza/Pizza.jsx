import styles from "./Pizza.module.css";

const Pizza = (props) => {
  return (
    <div className={styles.pizza}>
      <img className={styles.image} src={props.image} alt={props.name} />
      <div className={styles.content}>
        <h2 className={styles.name}>{props.name}</h2>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Pizza;
