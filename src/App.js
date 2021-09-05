import { useState } from "react";
import "./App.css";

import FruitList from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  function filterRedFruits() {
    const redFruits = fruits.filter((e) => {
      return e.color === "red";
    });
    setFruits(redFruits);
  }
  return (
    <div className="App">
      <header className="App-header">
        <FruitList fruits={fruits}></FruitList>
        <button
          className="btnFilter"
          setFruits={setFruits}
          onClick={filterRedFruits}
        >
          Mostrar Frutas Vermelhas
        </button>
      </header>
    </div>
  );
}

export default App;
