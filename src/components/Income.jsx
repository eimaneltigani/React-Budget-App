import React, {useState} from 'react';


const Income = ({ onChange }) => {
    const [value, setValue] = useState(0);

    return (
        <form>
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
            <div className="income-box">
                <label>Gross Income</label>
                $<input 
                    type="number" 
                    defaultValue="0" 
                    min="0" 
                    max="300000" 
                    value={value}
                />
            </div>
        </form>
    );
}

export default Income;