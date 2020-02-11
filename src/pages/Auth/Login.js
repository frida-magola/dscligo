
import React from "react";
import '../../styling/main.css';
// import Input from '../../components/Inputs/Input';

const logo_img = require ('../../img/logoxlg.png');


const login = (props) => {
    return (
        <div className="login-container">
            <div className="login-container__content">
                <div className="login-container__content__logo">
                    <img src={logo_img} alt="logo" />
                </div> 
                    <h1 className="sing-up">sign in</h1>
                <form action="" method="post">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"  
                            value=""
                            placeholder="username"
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="password"  
                            className="form-control" 
                            value=""
                            placeholder="password"
                        />
                    </div>
                    
                    <div className="form-group">
                        <button className="btn-login">Sign up</button>
                    </div>
                </form>
                    <a href="google.com" className="forgot">forgot password?</a>
            </div>
        </div>
    
        
        
    );
};

export default login;















// import React from 'react';
// import '../../styling/main.css';
// import Input from '../../components/Inputs/Input';

// const Login = (props) => {
//     return (
        
//         <div className="login">
//             <h1>Sign in</h1>
//             <div>
//                 <img src="/img/logo.png"></img>
//             </div>
//             <Input 
//                type="text" 
//                placeholder="E-mail"
//                value={props.value}
//                onChangeText={props.onChangeText}
//             />
//             <br></br>
//             <Input 
//                type="text" 
//                placeholder="E-mail"
//                value={props.value}
//                onChangeText={props.onChangeText}
//             />
//              <br></br>
             
//              <div class="my-btn">
//                  <button>sing up</button>
//              </div>
// </div>
          
//         );
// }

// export default Login;
