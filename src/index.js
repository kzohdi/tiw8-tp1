import React from 'react';
import ReactDOM from 'react-dom';

// Import de l'image
import LOGO from '../images/logo.png';

const Index = () => {
    return <img src={LOGO} alt="Logo" />;
};
ReactDOM.render(<Index />, document.getElementById('root'));