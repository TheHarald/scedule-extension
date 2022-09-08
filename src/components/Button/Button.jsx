import React from 'react';
import './button.css'

function Button({onClick, text}) {
    return (
        <button 
            className='button-primary'
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;