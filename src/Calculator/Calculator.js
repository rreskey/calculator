import React from 'react';

const stringify = (str) => {
    // if (!number.keyTrigger === '=' ) return 
    const arr = [];
    let char = '';
    for (const character of str) {
        if ('^*/+-'.includes(character)) {
            if(char === '' && character === '-') {
                char = '-';
            } else {
                arr.push(parseFloat(char), character)
                char= '';
            }
        } else {
            char += character;
        }
    }
    if (char !== '') {
        arr.push(parseFloat(char))
    }
    return arr;
}

const calculate = (stringArr) => {
    const operatorPrecedence = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}];
    let operator;
    for (const operators of operatorPrecedence) {
        const newArr = [];
        for (const char of stringArr) {
            if (char in operators) {
                operator = operators[char];
                console.log(operator)
            } else if (operator) {
                newArr[newArr.length - 1] = 
                    operator(newArr[newArr.length - 1], char);
                operator = null;    
            } else {
                newArr.push(char)
            } 
        }
        stringArr = newArr;
    }
    return (stringArr.length > 1) ? stringArr : stringArr[0];
}

function Calculator({number, setAnswer, display, expression}) {
    return (
        <div onClick={() => {
            if(number.keyTrigger == '=')  {
               setAnswer(calculate(stringify(expression)))
            } else display(`${number.keyTrigger}`)
        }} className='number'>
            <p>{number.keyTrigger}</p>
        </div>
    )
}

export default Calculator