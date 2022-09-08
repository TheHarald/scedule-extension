import React, { useState } from 'react';
import Button from '../Button/Button';
import CloseButton from '../Button/CloseButton';
import Input from '../Input/Input';
import './modal.css'

function Modal({onClose}) {

    const [group, setGroup] = useState('')

    function handleChange(event){
        if(group.length === 3 || group.length === 6 ){
            setGroup(event.target.value+='-')
        }
        setGroup(event.target.value)
    }


    return (
        <div className='modal__container'>
            <h1>{group}</h1>
            <CloseButton
                onClick={onClose}
            />
            <Input
                placeholder={'Test'}
                label={'Группа'}
                value={group}
                onChange={handleChange}
            />

            <Button
                text={'Сохранить'}
            />
        </div>
    );
}

export default Modal;