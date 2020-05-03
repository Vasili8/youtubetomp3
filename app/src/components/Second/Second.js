import React from 'react';

import './Second.css';

const Second = () => {
    return (
        <section className="second-section">
            <div className='info'>
                <h3 className="info-h3">Instructions</h3>
                <ol>
                    <li>Copy From Youtube the Url</li>
                    <li>Paste it in the place</li>
                    <li>Click Convert</li>
                </ol>
            </div>
            <div className='info'>
                <h3 className="info-h3">Features</h3>
                <ul>
                    <li>No registeraion needed</li>
                    <li>No ads</li>
                    <li>One Click</li>
                </ul>
            </div>
        </section>
    );
}

export default Second;