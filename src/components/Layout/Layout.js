import React from 'react';
import '../../styling/main.css';
import Sidebar from '../Navigation/SiderBar';
import MenuIcons from '../Navigation/MenuIcons';
import UserAccountComponent from '../Users/UserComponent';
import SubHeaderNav from '../Header/SubHeader';
import SearchBar from '../SearchBar/SearchBar';
import MenuToggle from '../Navigation/Menu';
import RightComponent from '../RightComponents/RightComponent'

const Layout = props => {
   
    return (
        <div className="qki-container">
            {/* HEADER */}
                <div className="qki-header">
                <div className="qki-header-nav">
                    {/* title'page */}
                    <h3 className="qki-header-nav__title">{props.title} </h3> 
                    
                    {/* User right log as ... */}
                    <UserAccountComponent  
                        username={props.username}
                    />
                </div>
                
                {/* SUB HEADER NAV*/}
                <SubHeaderNav 
                    openSearchInput={props.openSearchInput}
                />
                
                {/* SEARCH BAR */}
                <SearchBar />
                
            </div>
            
            {/* SIDEBAR */}
                <div className="qki-sidebar">
                    {/* MENU TOGGLE */}
                    <MenuToggle openSlideMenu={props.openSlideMenu}/>
                    
                    {/* SIDE  MENU ICONS*/}
                    <MenuIcons />   
                </div>
            
            {/* SIDE MENU OPEN-SLIDE TOGGLE*/}
                <Sidebar 
                    closeSlideMenu={props.closeSlideMenu}
                />

            {/* MAIN CONTENT */}
            <div className="qki-main-content">
                {props.children}
            </div>
            
            {/* RIGHT SIDE */}
            <RightComponent />
            
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