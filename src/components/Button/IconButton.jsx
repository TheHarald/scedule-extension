import React from 'react';

function IconButton({onClick, icon}) {
    return (
        <button onClick={onClick} className='button'>
            {icon}
        </button>
    );
}

export default IconButton;