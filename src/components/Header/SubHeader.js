import React from 'react';
import '../../styling/main.css';

const subHeader = props => {
    return(
        <div className="qki-header-nav-navbar">
            <ul className="qki-header-nav-navbar__navbar-nav">
                <li className="qki-header-nav-navbar__navbar-nav--items">
                    <a href="https://google.com" className="qki-header-nav-navbar__navbar-nav--items__link">
                        All
                    </a>
                </li>
                <li className="qki-header-nav-navbar__navbar-nav--items">
                    <a href="https://google.com" className="qki-header-nav-navbar__navbar-nav--items__link">
                        New
                    </a>
                </li>
                <li className="qki-header-nav-navbar__navbar-nav--items">
                    <a href="https://google.com" className="qki-header-nav-navbar__navbar-nav--items__link">
                        Served
                    </a>
                </li>
                <li className="qki-header-nav-navbar__navbar-nav--items">
                    <a href="https://google.com" className="qki-header-nav-navbar__navbar-nav--items__link">
                        Priority
                    </a>
                </li>
            </ul> 
            <div className="qki-header-nav-navbar__navbar-nav--items ">
                <button className="btn" onClick={props.openSearchInput}>search</button>
            </div>
        </div> 
    )
}

export default subHeader;