import { useState, useEffect, Component } from "react";
import "./App.css";

// This code will be based on function and class components from react

// Function Component
export default function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={(event) => console.log(event)}
      />
      {monsters.map((monster) => (
        <h1 key={monster.name}>{monster.name}</h1>
      ))}
    </div>
  );
}

// Class Component
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   render() {
//     return (
//       <div className="App">
//         <input
//           className="search-box"
//           type="search"
//           placeholder = "search monsters"
//           onChange={(event) => { console.log(event) }} />
//         {this.state.monsters.map((monster) => {
//           return <h1>{monster.name}</h1>;
//         })}
//       </div>
//     );
//   }
// }

// export default App;
