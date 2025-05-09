const Pizza = (props) => {
  return (
    <div className="pizza">
      <h2 className="name">{props.name}</h2>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Pizza;
