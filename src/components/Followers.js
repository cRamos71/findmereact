import "./css/Followers.css";
import { useState, useEffect } from "react";

function Friends() {
  const [friendadd, setFriendAdd] = useState("");
  const [update, setUpdate] = useState(0);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");

  var requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("https://api.secureme.me/api/v1/follower/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setList(data.data);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [update, requestOptions]);

  function handleFollowerDelete(id) {
    var requestOptions = {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        FollowerUserID: id,
      }),
    };

    fetch("https://api.secureme.me/api/v1/follower", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUpdate(update + 1);
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleFriendAdd() {
    if (friendadd === sessionStorage.getItem("userid")) {
      setMessage("That's your User ID");
      return;
    }

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        FollowerUserID: parseInt(friendadd),
      }),
    };

    fetch("https://api.secureme.me/api/v1/follower/", requestOptions)
      .then((response) => {
        if (response.ok) setUpdate(update + 1);
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        if (friendadd < 0) setMessage("Invalid User ID");
      })
      .catch((error) => console.log("Error fetching data:", error));
  }

  function handleUsernameChange(event) {
    setFriendAdd(event.target.value);
  }

  return (
    <>
      <h1 id="hmiddle">
        <b>
          <label id="lmiddlef">Follo</label>
          <label id="lmiddlem">wers</label>
        </b>
      </h1>
      <label id="lbltextifs">
        Here you can add Followers, once added they will be able to see your
        locations!
      </label>
      <div className="container-fluid" id="first-container">
        <div className="row">
          <div className="col-sm-5" id="fc-text-one">
            <h1>Your Follower List</h1>
            <ul id="ullocs" style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {list?.map(
                (
                  item // ? so maps will only be called if locs aren't either null or undefined
                ) => (
                  <li key={item.id}>
                    <b>UserID</b>: {item.id}
                    <br />
                    <b>Username</b>: {item.username}
                    <br />
                    <button
                      id="btntrash"
                      onClick={() => handleFollowerDelete(item.id)}
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-sm-1"></div>
          <div
            className="col-sm-6 d-flex justify-content-center align-items-center"
            id="fc-texttwo"
          >
            <div className="row">
              <div className="col-sm-12" id="ftable">
                <h1>Add Follower</h1>
              </div>
              <div className="col-sm-12 d-flex justify-content-center">
                <input
                  type="number"
                  id="inputname"
                  placeholder="userid"
                  onChange={handleUsernameChange}
                />
              </div>
              <label id="gap2" className="d-flex justify-content-center">
                {message}
              </label>
              <div className="col-sm-12 mt-2 text-center" id="fadd">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="btnadd"
                  onClick={handleFriendAdd}
                >
                  Add
                </button>
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

export default Friends;
