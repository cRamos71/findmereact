import './css/Auth.css';
import React, {useState} from 'react';

function Auth () {
  
    const [username, setUsername] = useState(""); // I can change this whenever i want, i can add state (value) to the component
    const [password, setPassword] = useState("");
    const [indicator, setIndicator] = useState("");

    function handleUserNameChange(event){
        setUsername(event.target.value);
    }
    
    function handlePassWordChange(event){
        setPassword(event.target.value);
    }

    function handleRegisterSubmit(event){ // Handles the register button
        event.preventDefault(); // Lets me choose what this form will do when submited, overrides default form behaviour

        const url = "https://api.secureme.me/api/v1/auth/register";

        const sending = {
            username: username,
            password: password
          };

          fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sending)
          })
            .then(response => {
              if(response.status === 201){
                setIndicator("Account created!");
                
              }else{
                if(response.status === 406)
                setIndicator("That username is already in use!")
              }
            })
            .then(data => {
              console.log(data); // Log the response data
              // Perform any additional actions with the response data  
            })
            .catch(error => {
              console.error('Error:', error);
            });
    };

    function handleLoginSubmit(event){
      event.preventDefault();
      
      const [username, setUsername] = useState(""); // I can change this whenever i want, i can add state (value) to the component
      const [password, setPassword] = useState("");

      const sending = {
        username: username,
        password: password
      };

      // We are here

    };

    return(
    <div className='Auth'>
     <div className="container-fluid" id="first-container">
        <div className="row justify-content-center" id="row-login">
            <div className="col-sm-auto" id="main-col">
                <h1>Login into <b><label id="lbl">Find</label>Me</b></h1>
                <div id="formlogin" className="col-sm-auto justify-content-center">
                    <form id="formidlogin" className="col-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
                        <div className="form-group" id='formgroup'>
                            <label for="username"><b></b></label>
                            <div className="input-group " id="user">
                                <input type='text' placeholder="username" className="form-control" id="username" value={username} onChange={handleUserNameChange}/>
                            </div>
                            <label for="password"><b></b></label>
                            <div className="input-group" id="pass">
                                <input type="password" placeholder="password" className="form-control" id="password" value={password} onChange={handlePassWordChange}/>
                            </div>
                        </div>            
                            <label for="gap" id='gap'><b>{indicator}</b></label> {/* Diplayed message */}                             
                            <div id="row-buttons" className="row">
                                <div className="d-flex col-sm-6 justify-content-center">
                                  <button type="submit" className="btn btn-default shadow-none" id="button" onClick={handleLoginSubmit}><b>Login</b></button>
                                </div>
                                <div className="d-flex col-sm-6 justify-content-center">
                                  <button type="submit" className="btn btn-default shadow-none" id="button" onClick={handleRegisterSubmit}><b>Register</b></button></div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
     </div>
    </div>
    );
};

export default Auth;