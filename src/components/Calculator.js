import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Display from './Display';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newState = calculate(calculatorState, buttonName);
    setCalculatorState(newState);
  };

  return (
    <div className="calculator">
      <Display value={calculatorState.next || calculatorState.total || '0'} />
      <button type="button" className="key function" onClick={() => handleButtonClick('AC')}>AC</button>
      <button type="button" className="key function" onClick={() => handleButtonClick('+/-')}>+/-</button>
      <button type="button" className="key function" onClick={() => handleButtonClick('%')}>%</button>
      <button type="button" className="key operator" onClick={() => handleButtonClick('/')}>/</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('7')}>7</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('8')}>8</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('9')}>9</button>
      <button type="button" className="key operator" onClick={() => handleButtonClick('x')}>x</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('4')}>4</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('5')}>5</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('6')}>6</button>
      <button type="button" className="key operator" onClick={() => handleButtonClick('-')}>-</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('1')}>1</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('2')}>2</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('3')}>3</button>
      <button type="button" className="key operator" onClick={() => handleButtonClick('+')}>+</button>
      <button type="button" className="key digit zero" onClick={() => handleButtonClick('0')}>0</button>
      <button type="button" className="key digit" onClick={() => handleButtonClick('.')}>.</button>
      <button type="button" className="key operator" onClick={() => handleButtonClick('=')}>=</button>
    </div>
  );
}

export default Calculator;
