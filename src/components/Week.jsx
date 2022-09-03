import React from 'react';
import ArrowButton from './ArrowButton';
import Day from './Day';

function Week(props) {
    return (
        <div className='week-container'>
            <ArrowButton
                type={'prev'}
                onClick={()=>alert('prev')}
            />
            <Day day={'пн'} dayNumber={1}/>
            <Day day={'вт'} dayNumber={2}/>
            <Day day={'ср'} dayNumber={14}/>
            <Day day={'чт'} dayNumber={15}/>
            <Day day={'пт'} dayNumber={16}/>
            <Day day={'сб'} dayNumber={17}/>
            <ArrowButton
                type={'next'}
                onClick={()=>alert('next')}
            />
        </div>
    );
}

export default Week;