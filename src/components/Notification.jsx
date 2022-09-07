import React from 'react';
import CloseButton from './Button/CloseButton';

function Notification({title, handleClose}) {

    const error = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.7" cx="12" cy="12" r="10" fill="#F12B43"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.9393 12L7.46906 15.4703L8.53099 16.5297L12 13.0607L15.4691 16.5298L16.531 15.4704L13.0607 12L16.531 8.52972L15.4691 7.47034L12 10.9394L8.531 7.47035L7.46906 8.52972L10.9393 12Z" fill="white"/>
    </svg>

    return (
        <article className={title.length > 0?'notification':'notification hide' }>
            <div className='notification__main-info'>
                {error}
                <div className='notification__text-container'>
                    <p className='notification__title'>{title}</p>
                </div>
            </div>
            <CloseButton onClick={handleClose}/>  
        </article>
    );
}

export default Notification;