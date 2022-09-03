import React from 'react';
import './index.css'

function Dots(props) {
    return (
        <div className='week-dots-container'>
            <div className='week-dots__row'>
                <span className='week-dots-container__dot'></span>
                <span className='week-dots-container__dot active'></span>
                <span className='week-dots-container__dot'></span>
            </div>
            <div className='week-dots__row'>
                <span className='week-dots-container__dot'></span>
                <span className='week-dots-container__dot'></span>
                <span className='week-dots-container__dot active'></span>
            </div>
        </div>
    );
}

export default Dots;