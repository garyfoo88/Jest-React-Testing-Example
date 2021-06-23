import React, { useState } from 'react';
import './Counter.css'
function Counter(props) {
    // const textAreaRef = useRef(null)

    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1)

    return (
        <div>
            <h3 data-testid="header">Counter</h3>
            <h2 data-testid="counter">{counterValue}</h2>
            <button data-testid="subtract-btn">-</button>
            <input className="text-center" data-testid="input" type="number" value={inputValue} />
            <button data-testid="add-btn">+</button>

            {/* <textarea ref={textAreaRef} onChange={(e) => { console.log(textAreaRef.current.value) }} style={{ fontSize: '30px' }}></textarea> */}
        </div>
    );
}

export default Counter;