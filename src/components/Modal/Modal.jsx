import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import CloseButton from '../Button/CloseButton';
import Input from '../Input/Input';
import Notification from '../Notification';
import './modal.css'

function Modal({onClose}) {

    const [group, setGroup] = useState('')
    const [error,setError] = useState('')
    const [ok,setOk] = useState('')

    const url ='https://mirea.xyz/api/v1.3/groups/certain?name='


    useEffect(()=>{
        chrome.storage.local.get(['schedule'], function(result) {
           setGroup(result.schedule.groupName)
        });
    },[])

    function handleSave(){

        if(group.length !== 10){
            setError('Название группы введено неверно')
            return
        }
        fetch(`${url}${encodeURI(group.toUpperCase())}`).then(
            response => response.json()
        ).then(
            data => {
                if(Object.keys(data).length === 0){
                    setError('Группа не найдена')
                }else{
                    console.log('get -> ',data[0]); 
                    chrome.storage.local.set({schedule:data[0]},function() {
                        console.log('Value is set');
                    })
                    setOk('Группа успешно сохранена')
                }

            }
        )
        
    }

    function handleChange(event){
        if(group.length < event.target.value.length ){
            if(group.length === 3 || group.length === 6 ){
                setGroup(event.target.value+='-')
            }else{
                setGroup(event.target.value)
            }
        }else{
            setGroup(event.target.value)
        }
        
    }

    return (
        <div className='modal__container'>
            <div className='modal__header'>
                <CloseButton
                    onClick={onClose}
                />
            </div>
            <Input
                placeholder={'ИКБО-01-19'}
                label={'Группа'}
                value={group}
                onChange={handleChange}
            />
            <Notification
                title={error}
                type='error'
                handleClose={()=>setError('')}
            />
            <Notification
                title={ok}
                type='ok'
                handleClose={()=>setOk('')}
            />
            <Button
                text={'Сохранить'}
                onClick={handleSave}
            />

        </div>
    );
}

export default Modal;