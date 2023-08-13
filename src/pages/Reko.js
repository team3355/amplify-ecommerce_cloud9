import React from 'react';

function Reko(props) {
    return (

        <div>
            <h2>Reko Page</h2>
            <p>Here is the content of the Reko page.</p>
            <button onClick={() => props.history.push('/')}>Back to Main</button>
        </div>
    );
}

export default Reko;
