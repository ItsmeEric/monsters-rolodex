import { useState, useEffect, Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

// This code will be based on function and class components from react

// Function Component
// export default function App() {
//   const [monsters, setMonsters] = useState([]);
//   const [searchField, setSearchField] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => setMonsters(users))
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLowerCase().includes(searchField.toLowerCase());
//   });

//   const handleChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     setSearchField(searchField);
//   };

//   return (
//     <div className="App">
//       <input
//         className="search-box"
//         type="search"
//         placeholder="search monsters"
//         onChange={handleChange}
//       />
//       {filteredMonsters.map((monster) => (
//         <h1 key={monster.name}>{monster.name}</h1>
//       ))}
//     </div>
//   );
// }

// Class Component
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  // Initializing the search method
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // Destructuring
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
