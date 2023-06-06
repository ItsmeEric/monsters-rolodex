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

  const handleChange = (event) => {
    console.log(event.target.value);

    const searchString = event.target.value.toLowerCase();
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    setMonsters(filteredMonsters);
  };

  return (
    <div className="App">
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={handleChange}
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
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
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
//           placeholder="search monsters"
//           onChange={(event) => {
//             console.log(event.target.value);
//             const searchString = event.target.value.toLocaleLowerCase();
//             const filteredMonsters = this.state.monsters.filter((monster) => {
//               return monster.name.toLocaleLowerCase().includes(searchString);
//             });

//             this.setState(() => {
//               return { monsters: filteredMonsters };
//             });
//           }}
//         />
//         {this.state.monsters.map((monster) => {
//           return <h1>{monster.name}</h1>;
//         })}
//       </div>
//     );
//   }
// }

// export default App;
