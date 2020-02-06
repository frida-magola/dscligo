import React from 'react';
import '../../styling/main.css';

const Navigation = props => {
    
    return (
        <nav className="navbar navbar__bg--green">
            <h1>
                <a>
                    cligo Healthcare QS - Dash
                </a>
            </h1>
            
            <ul>
                <li>
                    <a href="#">Hospitals</a>
                </li>
                <li>
                    <a href="#">register</a>
                </li>
                <li>
                    <a href="#">Admin</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;