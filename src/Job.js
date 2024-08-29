import React from 'react';

export default function Job({ salary, position, company }) {
    return (
        <React.Fragment>
            <h2>{salary}</h2>
            <h2>{position}</h2>
            <h2>{company}</h2>
        </React.Fragment>
    );
}
