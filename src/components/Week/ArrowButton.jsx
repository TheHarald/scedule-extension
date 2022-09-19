import React from 'react';
import '../index.css'

function ArrowButton({type,onClick}) {
    let button
    if(type==='next'){
        button = <svg width="8" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.172 6.5L0.222 1.55L1.636 0.136002L8 6.5L1.636 12.864L0.222 11.45L5.172 6.5Z" fill="#1890FF"/>
        </svg>
    }else if(type==='prev'){
        button = <svg width="8" height="13"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.82802 6.5L7.77802 1.55L6.36402 0.136002L1.52588e-05 6.5L6.36402 12.864L7.77802 11.45L2.82802 6.5Z" fill="#1890FF"/>
        </svg>
    }
    return (
        <div onClick={onClick} className='arrow-container'>
            {button}
        </div>
    );
}

export default ArrowButton;