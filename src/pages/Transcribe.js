import React from 'react';

function Transcribe(props) {
    return (
        <div>
            <h2>Transcribe Page</h2>
            <p>Here is the content of the Transcribe page.</p>
            <button onClick={() => props.history.push('/')}>Back to Main</button>
        </div>
    );
}

export default Transcribe;
