import React from 'react';
import '../../styling/main.css';

const Layout = props => {
   
    return (
        <div className="qki-container">
            {/* HEADER */}
            <div className="qki-header">
                
                <div className="qki-header-nav">
                    
                    <h3 className="qki-header-nav__title">{props.title} </h3> 
                    <div className="qki-header-nav__account-user">
                        <p>Login as {props.username}</p>
                    </div>
                </div>
                
                {/* sub header */}
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
                
                {/* SEARCH BAR */}
                <div className="search">
                    <div className="search__show-items">
                        <p className="search__show-items--pagination">Pagination</p>
                    </div>
                    
                    <form className="search__form open-search">
                        <input className="search__form--input" />
                        <button className="search__form--button">
                            <svg className="search__form--icon">
                                {/* <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use> */}
                            </svg>
                        </button>
                    </form>
                </div> 
            </div>
            
            {/* SIDEBAR */}
            <div className="qki-sidebar">
                
                {/* menu icon */}
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
                
                {/* SIDE ICONS MENU */}
                <div className="side-menu-icons menu-icons">
                    <a href="https://google.com" className="side-menu-icons--icon">Icon 1</a>
                    <a href="https://google.com" className="side-menu-icons--icon">Icon 2</a>
                    <a href="https://google.com" className="side-menu-icons--icon">Icon 3</a>
                    <a href="https://google.com" className="side-menu-icons--icon">Icon 4</a>
                    <a href="https://google.com" className="side-menu-icons--icon">Icon 5</a>
                </div>
            </div>
            
            {/* SIDE MENU OPEN-SLIDE TOGGLE*/}
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
            
            {/* MAIN CONTENT */}
            <div className="qki-main-content">
                {props.children}
            </div>
            
            {/* RIGHT SIDE */}
            <div className="qki-right"> 
                <p>Right side</p>
            </div>
            
            {/* FOOTER */}
            <div className="qki-footer">
                <p className="copyrighter">
                    &copy; Copyright 2019 - {new Date().getFullYear('Y')} designed By Quirky Innovations. All right reserved.
                </p>
            </div>
            
        </div>
    );
}

export default Layout;