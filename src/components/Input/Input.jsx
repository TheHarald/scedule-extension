import React from 'react';
import './input.css'

function Input({ label, placeholder, value , onChange}) {

    let inputStyle =  'input__field'
    if(value.length === 10){
        if(value.match('^[А-я]{4}-\d{2}-\d{2}$')){
            inputStyle += ' correct'
        }else{
            inputStyle += ' error'
        }
    }
    return (
        <div className='input'>
            <label className='input__label'>{label}</label>
            <input 
                className={inputStyle} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            >
            </input>
            
        </div>
    );
}

export default Input;