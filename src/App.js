import { useState } from "react";
import "./App.css";

import FruitList from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <FruitList setFruits={setFruits} fruits={fruits}></FruitList>
      </header>
    </div>
  );
}

export default App;
