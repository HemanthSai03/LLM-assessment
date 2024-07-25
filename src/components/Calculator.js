// src/components/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let res;

        switch (operation) {
            case 'add':
                res = n1 + n2;
                break;
            case 'subtract':
                res = n1 - n2;
                break;
            case 'multiply':
                res = n1 * n2;
                break;
            case 'divide':
                res = n1 / n2;
                break;
            default:
                res = 0;
        }

        setResult(res);
    };

    return (
        <div className="calculator-container">
            <h1>Basic Calculator</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    calculate();
                }}
            >
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Number 1"
                />
                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                >
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="divide">/</option>
                </select>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Number 2"
                />
                <button type="submit">Calculate</button>
            </form>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default Calculator;
