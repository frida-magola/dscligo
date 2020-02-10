import React from 'react';

const menu = props => {
    return(
        <nav className="navbar-menu">
            <span className="navbar-menu--open-slide">
                <button className="btn__open-slide-menu" onClick={props.openSlideMenu}>
                    <svg width="30" height="30">
                        <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
                        <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
                        <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
                    </svg>
                </button>
            </span>
        </nav>
    )
}

export default menu;