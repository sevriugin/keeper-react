import React from 'react';

function Footer() {
    return <footer><p>© Copyright <span role="img" aria-label="point mark">📍</span> Sergei Sevriugin, {(new Date()).getFullYear()}</p></footer>
}

export default Footer;