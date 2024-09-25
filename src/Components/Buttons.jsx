import React from 'react';
import '../css/Buttons.css';

const Buttons = ({ onButtonClick }) => {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'C', '0', '=', '+'
    ];

    return (
        <div className="buttons">
            {buttons.map((button) => (
                <button key={button} onClick={() => onButtonClick(button)}>
                    {button}
                </button>
            ))}
        </div>
    );
};

export default Buttons;
