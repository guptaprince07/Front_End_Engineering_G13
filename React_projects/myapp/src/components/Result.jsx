import React, { useState } from 'react';
import './Result.css';

export default function Result() {
  const [input, setInput] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  // Handle clicking numbers and operators
  const handleButtonClick = (value) => {
    if (isCalculated) {
      // If an operator is clicked after calculation, continue with the result
      if (['+', '-', '*', '/'].includes(value)) {
        setIsCalculated(false);
      } else {
        // If a number is clicked, start a new calculation
        setInput('');
        setIsCalculated(false);
      }
    }
    setInput((prev) => prev + value);
  };

  // Clear the display
  const handleClear = () => {
    setInput('');
    setIsCalculated(false);
  };

  // Evaluate the expression and display the result
  const handleCalculate = () => {
    try {
      // Using Function constructor as a safer alternative to eval
      const evaluatedResult = Function(`'use strict'; return (${input})`)();
      setInput(String(evaluatedResult));
      setIsCalculated(true);
    } catch (error) {
      setInput('Error');
      setIsCalculated(true);
    }
  };

  return (
    <div className="calculator-container">
      {/* Calculator Display Screen */}
      <div className="calculator-display">
        {input || '0'}
      </div>

      {/* Calculator Keypad */}
      <div className="keypad-grid">
        {/* Digits 1 to 9 and 0 */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            className={`calc-btn ${num === 0 ? 'zero-btn' : ''}`}
            onClick={() => handleButtonClick(String(num))}
          >
            {num}
          </button>
        ))}

        {/* Operators */}
        <button className="calc-btn op-btn" onClick={() => handleButtonClick('+')}>+</button>
        <button className="calc-btn op-btn" onClick={() => handleButtonClick('-')}>-</button>
        <button className="calc-btn op-btn" onClick={() => handleButtonClick('*')}>*</button>
        <button className="calc-btn op-btn" onClick={() => handleButtonClick('/')}>/</button>
        
        {/* Control Buttons */}
        <button className="calc-btn clear-btn" onClick={handleClear}>C</button>
        <button className="calc-btn equals-btn" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}