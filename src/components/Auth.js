import './css/Auth.css';
import React, {useState} from 'react';

function Auth () {
  
    // On load
    const [username, setUsername] = useState(""); // I can change this whenever i want, i can add state (value) to the component
    const [password, setPassword] = useState("");
    const [indicator, setIndicator] = useState("");

    // On action
    function handleUserNameChange(event){ // Auto updates the value when writing 
        setUsername(event.target.value.trim());  // .trim() is a js function that removes "white spaces"
    }
    
    function handlePassWordChange(event){ // Auto updates the value when writing 
        setPassword(event.target.value.trim());
    }

    function passwordfilters(password){
      if(password === '' || username === ''){
        setIndicator("Empty fields!");
        return false
      }else if(password.length < 8){
        setIndicator("Password is too small!");
        return false
      }else if(!/\d/.test(password)){
        setIndicator("Password must contain one digit!");
        return false
      }else if(!/[A-Z]/.test(password)){
        setIndicator("Password must contain at least one uppercase letter!");
        return false
      }else if(!/[!@#$%^&*)(+=._-]/.test(password)){
        setIndicator("Password must contain one symbol!");
        return false
      }
      return true
    }

    function handleRegisterSubmit(event){ // Handles the register button
        event.preventDefault(); // Lets me choose what this form will do when submited, overrides default form behaviour

        const url = "https://api.secureme.me/api/v1/auth/register";
        
        if(!passwordfilters(password)){
          return
        }

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
            .then(async (response) => {
              const data = await response.json();
              if(response.status === 201){
                setIndicator("Account created!");
              }else if(response.status === 406){
                setIndicator("That username is already in use!");
              }else{
                throw new Error('Registration failed');
              }
              console.log(data);
            })
            .catch(error => {
              console.error('Error:', error);
            });
    };

    function handleLoginSubmit(event){
      event.preventDefault();

      const url = "https://api.secureme.me/api/v1/auth/login";

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
        .then(async (response) => {
          const data = await response.json();
          if(response.status === 200){
            sessionStorage.setItem("userid", data.uid);
            sessionStorage.setItem("token", data.token); // I can acess this anywere by using: sessionStorage.getItem("token");
            sessionStorage.setItem("username", data.username);
            sessionStorage.setItem("password", password);
            window.location.href = '/dashboard';
          }else if(response.status === 401){
            setIndicator("Wrong Credentials!");
            }else{
              throw new Error("Login failed!"); 
            }
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };

    return(
    <div className='Auth'>
     <div className="container-fluid" id="first-container">
        <div className="row justify-content-center" id="row-login">
            <div className="col-sm-auto" id="main-col">
                <h1>Login into <b><label id="lbl">Find</label>Me</b></h1>
                <div id="formlogin" className="col-sm-auto justify-content-center">
                    <form id="formidlogin" className="col-10 col-md-8 col-lg-6">
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
                                  <button type="submit" className="btn btn-default shadow-none" id="button1" onClick={handleLoginSubmit}><b>Login</b></button>
                                </div>
                                <div className="d-flex col-sm-6 justify-content-center">
                                  <button type="submit" className="btn btn-default shadow-none" id="button2" onClick={handleRegisterSubmit}><b>Register</b></button></div>
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