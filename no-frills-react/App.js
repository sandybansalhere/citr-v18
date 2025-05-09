const Title = (props) => {
  return React.createElement("h1", {}, props.text);
};

const Description = (props) => {
  return React.createElement("p", {}, props.text);
};

const App = () => {
  return React.createElement("div", { className: "app" }, [
    React.createElement(Title, { text: "React v18.3.1", key: 1 }),
    React.createElement(Description, {
      text: "Complete intro to React v18.3.1",
      key: 2,
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
