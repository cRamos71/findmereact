import './css/Profile.css';
import BioEditor from './BioEditor';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Profile() {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleShowPassword = () => {
      setShowPassword(true);
    };
  
    return (
      <div className="Profile">
        <h1 id="hmiddle">
          <b>
            <label id="lmiddlef">Pro</label>
            <label id="lmiddlem">file</label>
          </b>
        </h1>
        <div className="container-fluid" id="first-container">
          <div className="row">
            <div className="col-sm-5" id="fc-text-one">
              <h1 style={{ color: '#FFB7FF' }}><label id='loggggg'>Logged as ➜ </label>
                <label id='useridtop'>{sessionStorage.getItem('username')}</label>
              </h1>
              <h4 id='bio'>Bio:</h4>
              <BioEditor />
            </div>
            <div className="col-sm-7 d-flex flex-column align-items-center" id="fc-texttwo">
              <h2 style={{ textAlign: 'center' }}> <label id='lblforarea'>Private</label> Area  <img src="https://cdn-icons-png.flaticon.com/512/6433/6433665.png" alt="keylock" style={{ width: '1em', height: '1em', verticalAlign: 'middle' }}/> </h2>
              <br />
              <p id='youri'>Your info: <img src="https://cdn-icons-png.flaticon.com/512/2274/2274794.png" alt="info" style={{ width: '1em', height: '1em', verticalAlign: 'middle' }}/></p>
              <div>
              <p style={{ marginRight: '5px', paddingTop:'16px'}} id='puseri'><label id='uwi'>UserID ➜ </label>  <label id='ui'>{sessionStorage.getItem('userid')} </label></p>
              <p style={{ marginRight: '5px', paddingTop:'16px'}} id='puser'><label id='uw'>Username ➜ </label>  <label id='uu'>{sessionStorage.getItem('username')} </label></p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ marginRight: '4px', paddingTop:'16px' }} id='ppass'><label id='up'>Password ➜ </label></p>
                  {showPassword ? (
                    <span id='uup'>{sessionStorage.getItem('password')}</span>
                  ) : (
                    <button onClick={handleShowPassword} style={{ fontSize: '1em', width: '200px', height:'26px' }} id='btnshowpass'>Show Password</button>
                  )}
                </div>
              </div>
                <div className="container" id="containerSOS">
                    <Link to='/dashboard'>
                    <button type="submit" className="btn btn-default shadow" id="buttonSOS">
                        <b>Recent Locations</b>
                    </button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Profile