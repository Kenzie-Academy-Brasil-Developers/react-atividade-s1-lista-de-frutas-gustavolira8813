import "./style.css";
import { useState } from "react";
function FruitList(props) {
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
    </>
  );
}
export default FruitList;
