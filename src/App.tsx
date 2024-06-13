import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Car Leasing Calculator</h1>
            <div className='Calc-input'>
                <CalcInputItem inputId='car-type' labelText='Car Type:'>
                    <select id='car-type'>
                        <option value="brand-new">Brand New</option>
                        <option value="used">Used</option>
                    </select>
                </CalcInputItem>
                <CalcInputItem inputId='lease-period' labelText='Lease Period (months):'>
                    <input id='lease-period' type="text" defaultValue={60} />
                </CalcInputItem>
                <CalcInputItem inputId='car-value' labelText='Car Value (€10,000 - €200,000):'>
                    <input id='car-value' type="text" defaultValue={120000} />
                    <RangeSlider min={10000} max={200000} defaultValue={120000} onValueChanged={(value) => {}} />
                </CalcInputItem>
                <CalcInputItem inputId='down-payment' labelText='Down payment (10% - 50%):'>
                    <input id='down-payment' type="text" defaultValue={10} />
                    <RangeSlider min={10} max={50} step={5} defaultValue={10} onValueChanged={(value) => {}} />
                </CalcInputItem>
            </div>
            <hr />
            <div className='Calc-output'>
                <h2>Leasing Details</h2>
                <div className='Calc-output-items'>
                    <div className='Calc-output-item'>
                        <p>Total Leasing Cost: €128408.32</p>
                        <p>Down Payment: €12000.00</p>
                    </div>
                    <div className='Calc-output-item'>
                        <p>Monthly Installment: €1940.14</p>
                        <p>Interest Rate: 2.99%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// An item containing an input, provided as a child node, and a generated label to it.
// The label and the input are wrapped in a 'div' so they can be manipulated by the grid system.
const CalcInputItem = (props: {inputId: string, labelText: string, children: React.ReactElement | React.ReactElement[]}) => {
    return (
        <div className='Calc-input-item'>
            <label htmlFor={props.inputId}>
                {props.labelText}
            </label>
            {props.children}
        </div>
    )
}

// ADD COMMENTS!!!
// ADD COMMENTS!!!
// ADD COMMENTS!!!
const RangeSlider = (props: {min: number, max: number, step?: number, defaultValue: number, onValueChanged: (v: number) => void}) => {
    return (
        <input type='range' min={props.min} max={props.max} step={props.step} defaultValue={props.defaultValue} onChange={(e) => props.onValueChanged(parseInt(e.target.value))} />
    )
}

export default App;
