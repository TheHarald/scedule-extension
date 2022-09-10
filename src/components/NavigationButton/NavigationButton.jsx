import React from 'react';
import IconButton from '../Button/IconButton';
import { rightArrowIcon } from '../icons';
import './navigationbutton.css'

function NavigationButton({text, onClick, blocked}) {

    let navButtonClass = 'navigation-button__container'
    if(blocked){
        navButtonClass+= '  blocked'
    }

    return (
        <button onClick={onClick} className={navButtonClass}>
            {rightArrowIcon}
            <p className='navigation-button__text'>{text}</p>
        </button>
    );
}

export default NavigationButton;