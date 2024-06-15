import './CalcInputItem.css';

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

export default CalcInputItem
