import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateIncome, resetIncome } from '../Redux/store/incomeSlice';
import { withFirebase } from './Firebase';
import '../css/Income.css'


const Income = () => {
    const [value, setValue] = useState(65000);
    const dispatch = useDispatch();

    const handleUpdate = (key, value) => {
        dispatch(updateIncome);
    }

    return (
        <form>
            <div className="income-slider">
                <label>You</label>
                <input 
                    type="range" 
                    defaultValue={65000} 
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
                    min="0" 
                    max="300000" 
                    className="input"
                    value={value}
                    step="500" 
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            
        </form>
    );
}

export default withFirebase(Income);