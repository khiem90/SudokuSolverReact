import React from 'react';

function Square({ id, value }) {
    return (
        <input
            type="text"
            value={value}
            className="square"
            id={id}
            maxLength="1"
            autoComplete="off"

        />
    )
}

export default Square;