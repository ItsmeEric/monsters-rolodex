import { useState, Component } from "react";
import "./App.css";

// This code will be based on function and class components from react

// Function Component
export default function App() {
  const monsters = [
    {
      name: "Dino",
    },
    {
      name: "Duo",
    },
    {
      name: "Andrei",
    },
    {
      name: "Yihua",
    },
    {
      name: "Eric",
    },
  ];

  return (
    <div className="App">
      {monsters.map((monster) => (
        <h1 key={monster.name}>{monster.name}</h1>
      ))}
    </div>
  );
}

// Class Component
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Dino",
        },
        {
          name: "Duo",
        },
        {
          name: "Andrei",
        },
        {
          name: "Yihua",
        },
        {
          name: "Eric",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

// export default App;
