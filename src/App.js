import logo from "./logo.svg";
import "./App.css";

// This code will be based on function and class components from react

// Function Component
export default function App() {
  const [name, setName] = useState({
    name: { firstName: "Eric", lastName: "Mbarushimana" },
    company: "Mourway",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi Eric</p>
        <button>Change name</button>
      </header>
    </div>
  );
}

// Class Component
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'John', lastName: 'Smith' },
      company: 'ZTM',
    };
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
