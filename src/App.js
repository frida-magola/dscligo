import React from 'react';
import Aux from './hoc/Aux';
import Loader from './pages/Loading/Loading';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      text:"",
      isCheckAuth:false,
      user:{},
      isLogin:false,
      isUserFound:false,

    }
  }
  
  //chech authentification
  checkAuth = () => {
      return new Promise((resolve,reject) => {
        this.setState({text:"Checking Auth..." });
        setTimeout(() =>{
          resolve(true);  
        },2000);
      })
      
  }
  
  //chech current current user
  fetchUser = () => {
    return new Promise((resolve,reject) => {
      this.setState({text:"Fetching User..." });
      setTimeout(() => {
        //User found
        // resolve({
        //   username:'mwalila', 
        //   isUserFound:true,
        //   isLogin:true
        // });
        
        //not user found
        resolve(false);
      },2000);
    })
      
  }

  //onClick get started button
  _onClickGetStartedHandler = async () => {
    
    const isAuth = await this.checkAuth();
    
    let fetchUserResult = null;
    
    if ( isAuth ) {
      
      fetchUserResult = await this.fetchUser();
      
      if (!fetchUserResult) {
        this.setState({isCheckAuth:true})
        
      }
    }
    this.setState({
      user:{
        username:fetchUserResult.username,
        isUserFound:fetchUserResult.isUserFound,
      }
    });
    
  }
  
  //open slide menu
  _openSlideMenu = () => {
    document.getElementsByClassName('menu-icons')[0].style.display='none';
    document.getElementsByClassName('navbar-menu')[0].style.display='none';
    document.getElementsByClassName('qki-main-content')[0].style.marginLeft = '21rem';
    document.getElementsByClassName('qki-header')[0].style.marginLeft='20rem';
    document.getElementsByClassName('qki-footer')[0].style.marginLeft='20rem';
    document.getElementsByClassName('qki-header-nav-navbar')[0].style.margin = '0 2rem';
    document.getElementsByClassName('btn__close')[0].style.display = 'block';
    
    let elms = document.getElementsByClassName('side-menu');
    
    for (var i = 0; i < elms.length; i++) {
      // elms[i].style.display='block';
      elms[i].style.width = '20rem';
      
      
    };
    
  }
  
  //close slide menu 
  _closeSlideMenu = () => {
    document.getElementsByClassName('menu-icons')[0].style.display='block';
    document.getElementsByClassName('navbar-menu')[0].style.display='block';
    document.getElementsByClassName('qki-main-content')[0].style.marginLeft = '9rem';
    document.getElementsByClassName('qki-header')[0].style.marginLeft='8rem';
    document.getElementsByClassName('qki-footer')[0].style.marginLeft='8rem';
    document.getElementsByClassName('qki-header-nav-navbar')[0].style.margin = '0 10rem';
    document.getElementsByClassName('btn__close')[0].style.display = 'none';
    
    let elms = document.getElementsByClassName('side-menu');
    
    for (var i = 0; i < elms.length; i++) {
      elms[i].style.width = '0';
      elms[i].style.transition = 'all .3s';
      
    };
    
  }
  
  // open saerch bar 
  _openSearchInput = () => {
    let elms = document.getElementsByClassName('open-search');
    
    for (var i = 0; i < elms.length; i++) {
      // elms[i].style.display='none';
      elms[i].style.width = '67rem';
      
    };
    
  }
  
  render () {

    return (
      <Aux>
        <Loader 
          onClick={() => this._onClickGetStartedHandler()} 
          isCheckAuth={this.state.isCheckAuth} 
          message={this.state.text}
          isLogin={this.state.isLogin}
          user={this.state.user}
          openSlideMenu={() => this._openSlideMenu()}
          closeSlideMenu={() => this._closeSlideMenu()}
          openSearchInput = {() => this._openSearchInput()}
        /> 

      </Aux>
    );
  }
}

export default App;
