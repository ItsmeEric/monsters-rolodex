import logo from "./logo.svg";
import "./App.css";

export default function App() {
  // We can't use this constructor because it is inside a function component and not a class component.
  // constructor() {
  //   super();

  //   this.state = {
  //     name: "Eric",
  //   };

  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* This one we use it with class component */}
        {/* <p>Hi {this.state.name}</p> */}
        {/* We'll use this one because we've a function component */}
        <p>Hi Eric</p>
        {/* This one must also be used with a class component */}
        {/* <button
          onClick={() => {
            this.setState({ name: "Andrei" });
          }}
        >
          Change name
        </button> */}
        <button>Change name</button>
      </header>
    </div>
  );
}
