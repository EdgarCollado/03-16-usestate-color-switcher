import React, { useState } from "react";

const getRandomColor = () => {
    const colors = ["Red", "Green", "Blue", "Pink", "Black"];

    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
}

function ColorSwitcher() {
    const [color, setColor] = React.useState('Yellow');

    const colorChangeHandler = () => {
        const newColor = getRandomColor();

        setColor(newColor);
    }

    const textStyle = {
        color: color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        border: '2px solid ${color}',
        padding: '10px',
      };

      const buttonStyle = {
        fontSize: '1.2 rem',
        padding: '12px 20px',
        backgroundColor: 'lightgray',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      };

    return (
        <div className="App">
            <h2 style={{ ...textStyle, color }}>The current color is {color}</h2>
            <button style={buttonStyle} onClick={colorChangeHandler}>Change color</button>
        </div>
    );
}

export default ColorSwitcher;