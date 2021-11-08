import React from 'react';
import './header.css';

const Header = ({ title, subtitle }) => {
    return (
        <header className="header">
            <h1 className="heeader__title">{ title }</h1>
            <div className="header__subtitle">{ subtitle }</div>
        </header>
    );
};

export default Header;
