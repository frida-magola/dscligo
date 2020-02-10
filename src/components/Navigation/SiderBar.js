import React from 'react';

const sidebar = props => {
    return (
        <div className="qki-side-menu side-menu">
            <button className="btn__close" onClick={props.closeSlideMenu}>&times;</button>
            <a href="https://google.com">Home</a>
            <a href="https://google.com">New Income</a>
            <a href="https://google.com">Served</a>
            <a href="https://google.com">Search</a>
            <a href="https://google.com">Appointment</a>
            
            <div>
                <a href="https://google.com">Notify</a>
                <a href="https://google.com">message</a>
                
                <p>Legal Version 1.0</p>
            </div>
        </div>
    )
}

export default sidebar;