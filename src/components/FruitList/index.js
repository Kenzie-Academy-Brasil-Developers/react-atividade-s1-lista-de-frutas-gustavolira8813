import "./style.css";
import { useState } from "react";
function FruitList(props) {
  function filterRedFruits() {
    const redFruits = props.fruits.filter((e) => e.color === "red");
    props.setFruits(redFruits);
  }

  const totalPrice = props.fruits.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  return (
    <>
      <h2>Total: R$ {totalPrice} reais</h2>
      <ul>
        {props.fruits.map((element, index) => (
          <li key={index}>{element.name}</li>
        ))}
      </ul>
      <button className="btnFilter" onClick={filterRedFruits}>
        Mostrar Frutas Vermelhas
      </button>
    </>
  );
}
export default FruitList;
