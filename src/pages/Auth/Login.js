
import React from "react";
import '../../styling/main.css';
import Input from '../../components/Inputs/Input';

const login = () => {
return (
    <div className="form-input">
      <form>
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="form-label">
          Your email
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
        <div className="text-center mt-4">
            <button>sing up</button>
        </div>
      </form>
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
