import React from 'react';
import IconButton from '../Button/IconButton';
import { optionIcon } from '../icons';
import './header.css'
import InfoDot from './InfoDot';

function Header({groupName, weekNumber, onOptionClick}) {
    return (
        <header className='header__conatiner'>
            <section className='header__main-info'>
            <h2 className='header__group'>Расписание {groupName}</h2>
            <p className='header__week'>выбрана {weekNumber}-ая неделя</p>
            </section>
            <section className='header__info'>
                <InfoDot type={'пр'} text={'практика'}/>
                <InfoDot type={'лб'} text={'лаб. работа'}/>
                <InfoDot type={'л'} text={'лекция'}/>
            </section>
            <IconButton
                icon={optionIcon}
                onClick={onOptionClick}
            />
        </header>
    );
}

export default Header;