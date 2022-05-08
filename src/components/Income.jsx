import React, {useState} from 'react';
import '../css/Income.css'


const Income = ({ onChange }) => {
    const [value, setValue] = useState(0);

    return (
        <form>
            <div className="income-slider">
                <label>You</label>
                <input 
                    type="range" 
                    defaultValue="0" 
                    min="0" 
                    max="300000" 
                    value={value}
                    className="slider"
                    step="500" 
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="income-input">
                <label>Income</label>
                <input 
                    type="number" 
                    defaultValue="0" 
                    min="0" 
                    max="300000" 
                    className="input"
                    value={value}
                />
            </div>
            
        </form>
    );
}

export default Income;