import React from 'react';
import '../../styling/main.css';
// import logo from '../../img/logo96.png';

const Popup = props => {
    return (
       <div className="popup">
           <h1>{props.message}</h1>
           {/* <div className="popup__content">
               <img src={logo} className="Spinner" alt="logo" />
           </div> */}
           
       </div> 
    );
}

export default Popup;