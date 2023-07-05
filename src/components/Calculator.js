import React from 'react';

import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => (
  <div className="card-stand">
    <div className="card">
      {/* Screen section */}
      <div className="screen">
        <p className="display">0</p>
      </div>
      {/* buttons */}
      <div className="calc-buttons">
        <button type="button" className="btn-gray" onClick={() => calculate()}>AC</button>
        <button type="button" className="btn-gray">+/-</button>
        <button type="button" className="btn-gray">%</button>
        <button type="button" className="btn-orange">÷</button>
        <button type="button" className="btn-gray">7</button>
        <button type="button" className="btn-gray">8</button>
        <button type="button" className="btn-gray">9</button>
        <button type="button" className="btn-orange">x</button>
        <button type="button" className="btn-gray">4</button>
        <button type="button" className="btn-gray">5</button>
        <button type="button" className="btn-gray">6</button>
        <button type="button" className="btn-orange">-</button>
        <button type="button" className="btn-gray">1</button>
        <button type="button" className="btn-gray">2</button>
        <button type="button" className="btn-gray">3</button>
        <button type="button" className="btn-orange">+</button>
        <button type="button" className="btn-gray-extra">0</button>
        <button type="button" className="btn-gray">.</button>
        <button type="button" className="btn-orange">=</button>
      </div>
    </div>
  </div>
);

export default Calculator;
