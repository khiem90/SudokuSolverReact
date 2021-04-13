import React from 'react';

function Square({ id, value, onChange, style, disabled }) {
    return (
        <input
            className="square"
            type="text"
            value={value}
            id={id}
            onChange={(e) => onChange(e, id)}
            maxLength="1"
            autoComplete="off"
            style={style}
            disabled={disabled}

        />
    )
}

export default Square;