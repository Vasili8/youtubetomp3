import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="top-footer">
                <p>Style insppired by <span><a href='https://youtubetomp3music.com/en1'>youtubetomp3music</a></span></p>
                <p>Converting used with the help of ytdl-core</p>
            </div>
            <div className='bottom-footer'>
                <h3>The Bottom</h3>
            </div>
        </footer>
    );
}

export default Footer;