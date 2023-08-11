import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Display from './Display';

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <button type="button" className="key function">AC</button>
      <button type="button" className="key function">+/-</button>
      <button type="button" className="key function">%</button>
      <button type="button" className="key operator">/</button>
      <button type="button" className="key digit">7</button>
      <button type="button" className="key digit">8</button>
      <button type="button" className="key digit">9</button>
      <button type="button" className="key operator">x</button>
      <button type="button" className="key digit">4</button>
      <button type="button" className="key digit">5</button>
      <button type="button" className="key digit">6</button>
      <button type="button" className="key operator">-</button>
      <button type="button" className="key digit">1</button>
      <button type="button" className="key digit">2</button>
      <button type="button" className="key digit">3</button>
      <button type="button" className="key operator">+</button>
      <button type="button" className="key digit zero">0</button>
      <button type="button" className="key digit">.</button>
      <button type="button" className="key operator">=</button>
    </div>
  );
}

export default Calculator;
