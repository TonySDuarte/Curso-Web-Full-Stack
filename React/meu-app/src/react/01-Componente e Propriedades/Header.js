import React from 'react'
import './App.css'
import App from './App';

function Header(props) {
    return (
        <header className="header">
            <h1>{props.name}</h1>
            <ul className="menu">
                <li>{props.links[0]}</li>
                <li>{props.links[1]}</li>
                <li>{props.links[1]}</li>
            </ul>
        </header>);
}

export default Header;
