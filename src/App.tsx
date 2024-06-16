import { useEffect, useState } from 'react';
import './App.css';
import CalcInputItem from './components/CalcInputItem';

// A formatter for converting numbers to currency strings
const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' });

function App() {
    // Inputs
    const [ carType, setCarType ] = useState('brand-new');
    const [ leasePeriod, setLeasePeriod ] = useState(60);
    const [ carValue, setCarValue ] = useState(120000);
    const [ downPayment, setDownPayment ] = useState(10);

    // Outputs
    const [ totalLeasingCost, setTotalLeasingCost ] = useState(0);
    const [ monthlyInstallment, setMonthlyInstallment ] = useState(0);
    const [ downPaymentPrice, setDownPaymentPrice ] = useState(0);
    const [ interestRate, setInterestRate ] = useState(0);

    // Input changes
    const onCarTypeChanged = (value: string) => {
        setCarType(value);
    }

    const onLeasePeriodChanged = (rawValue: string) => {
        setLeasePeriod(parseInt(rawValue));
    }

    const onCarValueChanged = (rawValue: string) => {
        setCarValue(parseInt(rawValue));
    }

    const onDownPaymentChanged = (rawValue: string) => {
        setDownPayment(parseInt(rawValue));
    }

    // Calculating outputs
    const calculateOutputs = () => {
        // Calculate interest rate
        let newInterestRate = 0;
        switch(carType){
            case 'brand-new': newInterestRate = 2.99; break;
            case 'used': newInterestRate = 3.7; break;
        }

        // Set the interest rate
        setInterestRate(newInterestRate);

        // Validate 'carValue' and 'downPayment' inputs
        if(carValue < 10000 || carValue > 200000 || downPayment < 10 || downPayment > 50){
            return;
        }

        // Calculate outputs
        let newDownPayment = carValue * (downPayment / 100);
        let newMonthlyInterest = newInterestRate / 100 / 12;
        let amountFinanced = carValue - newDownPayment;
        
        let newMonthlyInstallment = (amountFinanced * newMonthlyInterest) / (1 - Math.pow((1 + newMonthlyInterest), -leasePeriod));
        let newTotalLeasingCost = newMonthlyInstallment * leasePeriod + newDownPayment;

        // Set the calculated outputs
        setDownPaymentPrice(newDownPayment);
        setMonthlyInstallment(newMonthlyInstallment);
        setTotalLeasingCost(newTotalLeasingCost);
    }

    useEffect(calculateOutputs, [carType, carValue, downPayment, leasePeriod]);

    // Helper methods
    const formatToEuros = (value: number): string => {
        return formatter.format(value);
    }

    return (
        <div className='App'>
            <h1>Car Leasing Calculator</h1>
            {/* Input form */}
            <div className='Calc-input'>
                {/* Car type */}
                <CalcInputItem inputId='car-type' labelText='Car Type:'>
                    <select id='car-type' value={carType} onChange={e => onCarTypeChanged(e.target.value)}>
                        <option value='brand-new'>Brand New</option>
                        <option value='used'>Used</option>
                    </select>
                </CalcInputItem>
                {/* Lease period */}
                <CalcInputItem inputId='lease-period' labelText='Lease Period (months):'>
                    <select id='lease-period' value={leasePeriod} onChange={e => onLeasePeriodChanged(e.target.value)}>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                        <option value="60">60</option>
                    </select>
                </CalcInputItem>
                {/* Car value */}
                <CalcInputItem inputId='car-value' labelText='Car Value (€10,000 - €200,000):'>
                    <input id='car-value' type='text' value={carValue} onChange={e => onCarValueChanged(e.target.value)} />
                    <input type='range' min={10000} max={200000} value={carValue} onChange={e => onCarValueChanged(e.target.value)} />
                </CalcInputItem>
                {/* Down payment */}
                <CalcInputItem inputId='down-payment' labelText='Down payment (10% - 50%):'>
                    <input id='down-payment' type='text' value={downPayment} onChange={e => onDownPaymentChanged(e.target.value)} />
                    <input type='range' min={10} max={50} step={5} value={downPayment} onChange={e => onDownPaymentChanged(e.target.value)} />
                </CalcInputItem>
            </div>
            <hr />
            {/* Output */}
            <div className='Calc-output'>
                <h2>Leasing Details</h2>
                {/* Output texts */}
                <div className='Calc-output-items'>
                    <div className='Calc-output-item'>
                        <p>Total Leasing Cost: {formatToEuros(totalLeasingCost)}</p>
                        <p>Down Payment: {formatToEuros(downPaymentPrice)}</p>
                    </div>
                    <div className='Calc-output-item'>
                        <p>Monthly Installment: {formatToEuros(monthlyInstallment)}</p>
                        <p>Interest Rate: {interestRate}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
