import React from 'react';

function IconButton({onClick, icon}) {
    return (
        <div onClick={onClick} className='button'>
            {icon}
        </div>
    );
}

export default IconButton;