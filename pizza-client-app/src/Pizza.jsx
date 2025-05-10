const Pizza = (props) => {
  return (
    <div className="pizza-card">
      <img className="pizza-card__image" src={props.image} alt={props.name} />
      <div className="pizza-card__content">
        <h2 className="pizza-card__name">{props.name}</h2>
        <p className="pizza-card__description">{props.description}</p>
      </div>
    </div>
  );
};

export default Pizza;
