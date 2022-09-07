import React from 'react';
import CloseButton from '../Button/CloseButton';
import './modal.css'

function Modal({onClose}) {
    return (
        <div className='modal__container'>
            <CloseButton
                onClick={onClose}
            />
        </div>
    );
}

export default Modal;