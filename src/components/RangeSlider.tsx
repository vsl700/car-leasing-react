import { useEffect, useState } from "react";
import './RangeSlider.css';

const RangeSlider = (props: {min: number, max: number, step?: number, value: number, onChange: (value: number) => void}) => {
    const [ value, setValue ] = useState(props.min);

    // Used for controlling the background of the range slider
    // depending on the thumb's position (the background before 
    // the slider should be one color, while the rest should be another)
    const sliderValueStyle = {
        "--slider-percentage": `${(value - props.min) / (props.max - props.min) * 100}%`
    } as React.CSSProperties;

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    return (
        <input style={sliderValueStyle} className='Default-range-slider' type='range' min={props.min} max={props.max} step={props.step} value={value} onChange={e => props.onChange(parseInt(e.target.value))} />
    )
}

export default RangeSlider;