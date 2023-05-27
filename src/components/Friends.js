import './css/Friends.css';
import { useState } from 'react';

function Friends() {

    const [friendadd, setFriendAdd] = useState("");

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: sessionStorage.getItem("token")
      }
    };
  
    useEffect(() => {
      fetch("https://api.secureme.me/api/v1/follower/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const locations = reverseOrder
            ? data.locations.reverse()
            : data.locations;
          setLocs(locations);
        })
        .catch((error) => console.log("Error fetching data:", error));
    }, [reverseOrder, update]); // re-runs when reverseOrder / updates  changes



    function handleFriendAdd(){
      
      var requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          FollowerUserID: parseInt(friendadd)
        }),
      };


      fetch("https://api.secureme.me/api/v1/follower/", requestOptions)
        .then((response) =>{
          console.log(response.status);
          return response.json();
        })
        .then((data) =>{
          console.log(data);
        })
        .catch((error) => console.log("Error fetching data:", error));

    };

    function handleUsernameChange(event){
      setFriendAdd(event.target.value);
    };

    return (
      <>
        <h1 id="hmiddle">
          <b>
            <label id="lmiddlef">Frie</label>
            <label id="lmiddlem">nds</label>
          </b>
        </h1>
        <div className="container-fluid" id="first-container">
          <div className="row">
            <div className="col-sm-5" id="fc-textone">
              <h1>Your Friend List</h1>
              <ul>
                <li>PAULA</li>
              </ul>
            </div>
            <div className='col-sm-2'></div>
            <div className="col-sm-5 d-flex justify-content-center align-items-center" id='fc-textwo'>
              <div className="row">
                <div className="col-sm-12" id='ftable'>
                  <h1>Add Friend</h1>
                </div>
                <div className="col-sm-12 d-flex justify-content-center">
                  <input type="text" id="inputname" placeholder='userid' onChange={handleUsernameChange}/>
                </div>
                <div className="col-sm-12 mt-2 text-center" id='fadd'>
                  <button type="submit" className="btn btn-primary" id='btnadd' onClick={handleFriendAdd}>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="containerSOS">
          <button type="submit" className="btn btn-default shadow" id="buttonSOS">
            <b>SOS</b>
          </button>
        </div>
      </>
    );
  }

export default Friends