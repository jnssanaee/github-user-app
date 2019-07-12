import React from 'react';

function Header({ onKeyUp }) {
    return (
        <header>
            <input 
                type="text" 
                id="input" 
                placeholder="After typing Enter" 
                onKeyUp={ onKeyUp } 
            />
        </header>
    )
}

export default Header