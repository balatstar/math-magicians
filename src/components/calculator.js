import React from 'react';
import './calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <button className="key function">AC</button>
      <button className="key function">+/-</button>
      <button className="key function">%</button>
      <button className="key operator">/</button>
      <button className="key digit">7</button>
      <button className="key digit">8</button>
      <button className="key digit">9</button>
      <button className="key operator">x</button>
      <button className="key digit">4</button>
      <button className="key digit">5</button>
      <button className="key digit">6</button>
      <button className="key operator">-</button>
      <button className="key digit">1</button>
      <button className="key digit">2</button>
      <button className="key digit">3</button>
      <button className="key operator">+</button>
      <button className="key digit zero">0</button>
      <button className="key digit">.</button>
      <button className="key operator">=</button>
  </div>
  );
}

export default Calculator;