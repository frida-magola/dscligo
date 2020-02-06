import React from 'react';
import '../../styling/main.css';
import Dashboard from '../Dasboard/Home';
import Login from '../Auth/Login';

const Loading = props => {
  
  const isUserFound = props.user.isUserFound;
  const username = props.user.username;
  const isLogin = props.isLogin;
  const isCheckAuth = props.isCheckAuth;
  
    if (isUserFound === true) {
      return <Dashboard  
            username={username}
            openSlideMenu={props.openSlideMenu}
            closeSlideMenu={props.closeSlideMenu}
            openSearchInput={props.openSearchInput}
            // title={props.title}
        
        />
  
    }
    else if (isCheckAuth === true && isLogin === false) {
      return <Login />
    }
  
    return (
        <div className="Loader">
          <header className="App-loader">
            <p className="App-loader__title  u-margin-bottom-medium">cligo</p>
            <p className=" u-margin-bottom-medium">
              Welcome to cligo healthcare QS - dashboard 
            </p>
            <p>{props.message}</p>
            <button
              className="Loader--link btn btn--loader"
              onClick={props.onClick}
              // href="https://google.com"
            >
              Get's Started
            </button>
          </header>
        </div>
      );
}

export default Loading;