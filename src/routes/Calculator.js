import React, { useState } from 'react';

import '../styles/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [display, setDisplay] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleDisplay = (e) => {
    const content = e.target.innerText;
    setDisplay(calculate(display, content));
  };

  return (
    <div className="card-stand">
      <div className="card">
        {/* Screen section */}
        <div className="screen">
          <p className="display">
            { display.total || display.operation || display.next || 0 }
          </p>
        </div>
        {/* buttons */}
        <div className="calc-buttons">
          <button type="button" className="btn-gray" onClick={handleDisplay}>AC</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>+/-</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>%</button>
          <button type="button" className="btn-orange" onClick={handleDisplay}>÷</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>7</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>8</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>9</button>
          <button type="button" className="btn-orange" onClick={handleDisplay}>x</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>4</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>5</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>6</button>
          <button type="button" className="btn-orange" onClick={handleDisplay}>-</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>1</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>2</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>3</button>
          <button type="button" className="btn-orange" onClick={handleDisplay}>+</button>
          <button type="button" className="btn-gray-extra" onClick={handleDisplay}>0</button>
          <button type="button" className="btn-gray" onClick={handleDisplay}>.</button>
          <button type="button" className="btn-orange" onClick={handleDisplay}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
