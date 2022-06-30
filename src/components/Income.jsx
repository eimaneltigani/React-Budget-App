import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIncome } from '../Redux/store/incomeSlice';

import '../css/Income.css'


const Income = () => {
    const [value, setValue] = useState(5000);
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        setValue(e.target.value);
        dispatch(updateIncome);
    }

    return (
        <div className="form">
            <div className="income-slider">
                <label>Post-tax Income</label>
                <input 
                    type="range" 
                    defaultValue={5000} 
                    min="0" 
                    max="20000" 
                    value={value}
                    className="slider"
                    step="100" 
                    onChange={(e) => handleUpdate(e)}
                />
            </div>
            <div className="income-input">
                <label>Income</label>
                <input 
                    type="number" 
                    min="0" 
                    max="20000" 
                    className="input"
                    value={value}
                    step="100" 
                    onChange={(e) => handleUpdate(e)}
                />
            </div>
        </div>
    );
}

export default Income;