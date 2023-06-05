import './css/Profile.css';
// import BioEditor from './BioEditor';
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
              <h1 style={{ color: '#FFB7FF' }}>
                {sessionStorage.getItem('username')}
              </h1>
              <h2>Bio:</h2>
              {/* <BioEditor /> */}
            </div>
            <div className="col-sm-7 d-flex flex-column align-items-center" id="fc-texttwo">
              <h2 style={{ textAlign: 'center' }}>Private Area <img src="https://cdn-icons-png.flaticon.com/512/6433/6433665.png" alt="keylock" style={{ width: '1em', height: '1em', verticalAlign: 'middle' }}/> </h2>
              <br />
              <p>Your info: <img src="https://cdn-icons-png.flaticon.com/512/2274/2274794.png" alt="info" style={{ width: '1em', height: '1em', verticalAlign: 'middle' }}/></p>
              <p style={{ marginRight: '5px', paddingTop:'16px'}}>Username: {sessionStorage.getItem('username')} </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ marginRight: '4px', paddingTop:'16px' }}>Password:</p>
                {showPassword ? (
                  <span>{sessionStorage.getItem('password')}</span>
                ) : (
                  <button onClick={handleShowPassword} style={{ fontSize: '1em', width: '200px', height:'26px' }}>Show Password</button>
                )}
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