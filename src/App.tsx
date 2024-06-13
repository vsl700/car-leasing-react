import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Car Leasing Calculator</h1>
            <div className='Calc-input'>
                <InputContainer>
                    <label htmlFor="car-type">Car Type:</label>
                    <select id='car-type'>
                        <option value="brand-new">Brand New</option>
                        <option value="used">Used</option>
                    </select>
                    <label htmlFor='car-value'>Car Value (€10,000 - €200,000):</label>
                    <input type="text" defaultValue={120000} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="car-type">Car Type:</label>
                    <select id='car-type'>
                        <option value="brand-new">Brand New</option>
                        <option value="used">Used</option>
                    </select>
                </InputContainer>
            </div>
            <hr />
        </div>
    );
}

// An element that contains part of the inputs.
// It is used to either arrange multiple InputContainer-s
// horizontally or vertically
const InputContainer = (props: {children: React.ReactElement | React.ReactElement[]}) => {
    return (
        <div className='Input-container'>
            {props.children}
        </div>
    )
}

export default App;
