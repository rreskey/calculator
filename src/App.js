import './App.css';
import React from 'react';
import Calculator from './Calculator/Calculator'

const numbers = [{
  keyCode: 46,
  keyTrigger: '.', //decimals
},{
  keyCode: 34, // clear all
  keyTrigger: 'CA'
},{
  keyCode: 8, // backspace
  keyTrigger: 'C'
},{
  keyCode: 49,
  keyTrigger: '1',
}, {
  keyCode: 50,
  keyTrigger: '2',
}, {
  keyCode: 51,
  keyTrigger: '3',
}, {
  keyCode: 52,
  keyTrigger: '4',
}, {
  keyCode: 53,
  keyTrigger: '5',
}, {
  keyCode: 54,
  keyTrigger: '6',
}, {
  keyCode: 55,
  keyTrigger: '7',
}, {
  keyCode: 56,
  keyTrigger: '8',
}, {
  keyCode: 57,
  keyTrigger: '9',
},{
  keyCode: 94,
  keyTrigger: '^'
},{
  keyCode: 48,
  keyTrigger: '0'
}, {
  keyCode: 42,
  keyTrigger: '*'
},{
  keyCode: 47,
  keyTrigger: '/'
}, {
  keyCode: 45,
  keyTrigger: '-'
}, {
  keyCode: 43,
  keyTrigger: '+'
}, {
  keyCode: 13,
  keyTrigger: '='
}];

function App() {
  const [expression, setExpression] = React.useState('');
  const [answer, setAnswer] = React.useState(0);
  const display = (symbol) => {
    setExpression(prev => prev + symbol)
  }

  return (
    <div className='wrapper'>
      <div className='result'>
        <input value={expression} id='input' type='text' className='equation' placeholder='equation' disabled={true}/>
        <div className="eval">{answer}</div>
      </div>
      <div className="numpad">
        {numbers.map((number) => (
          <Calculator key={number.keyCode} number={number} display={display} setAnswer={setAnswer} expression={expression} />
        ))}
      </div>
    </div>
  );
}

export default App;
