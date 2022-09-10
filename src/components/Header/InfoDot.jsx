import React from 'react';
import './header.css'

function InfoDot({text, type}) {
    let dotsClass = 'week-dots-container__dot active'

    switch (type) {
        case 'лб':
            dotsClass+=' lab'
            break;
        case 'пр':
            dotsClass+=' practice'
            break;
        case 'л':
            dotsClass+=' lection'
            break;
    
    }
    return (
        <div className='info-dot'>
            <span className={dotsClass}></span>
            <p className='info-dot__text'>{text}</p>
        </div>
    );
}

export default InfoDot;