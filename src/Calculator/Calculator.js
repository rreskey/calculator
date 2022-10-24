import React from 'react';

const stringify = (str) => {
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
    const operatorPrecedence = [
        {'^': (a, b) => Math.pow(a, b)},
        {'*': (a, b) => a * b, '/': (a, b) => a / b},
        {'+': (a, b) => a + b, '-': (a, b) => a - b}
    ];
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

function Calculator({id, keyCode, number, setAnswer, clearAll, clear, display, expression, className}) {
    const [active, setActive] = React.useState(false);
    const _active = () => {
        setActive(true);
        setTimeout(() => {
            setActive(false)
        }, 300);
    }
    
    return (
        <div onClick={() => {
            _active()
            if(number.keyTrigger === '=')  {
               setAnswer(calculate(stringify(expression)))
            } else if (number.keyTrigger === 'C') {
                clear()
            } else if (number.keyTrigger === 'CA') {
                clearAll()
            } else display(`${number.keyTrigger}`, number.keyCode)
        }} id={id} className={`number ${className} ${active && 'pressed'}`}>
            <p>{number.keyTrigger}</p>
        </div>
    )
}

export default Calculator