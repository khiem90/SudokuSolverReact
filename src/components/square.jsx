import React from 'react';

function Square({ id, value }) {
    return (
        <input
            type="text"
            className="square"
            id={id}
            maxLength="1"

        />
    )
}

export default Square;