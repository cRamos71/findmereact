import "./css/Following.css";
import "leaflet/dist/leaflet.css";
import Modal from "./Modal";
import SecondModal from "./SecondModal";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useState, useEffect } from "react";
import React, { Fragment } from "react";

function Following() {
  const [following, setFollowing] = useState([]); // keeps servers anwser to type on the right
  const [followingids, setFollowingIds] = useState([]); // I'll need this to get the last locs in the modal
  const [lab, setLabel] = useState(""); // Viewing stats
  const [maplocs, setMapLocs] = useState([]); //  all locs
  const [lastlocs, setLastLocs] = useState([]); // last loc, need to be an arr for .map 
  const [sMarker, setSMarker] = useState(false); // works as a flag
  const [sAllMarker, setAllMarker] = useState(false); // works as a flag
  const [dateF, setDateF] = useState("2023-01-01"); // date filter
  const [dateT, setDateT] = useState("2023-07-01"); // date filter
  const [responses, setResponses] = useState([]);


  var requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token"),
    },
  };

  useEffect(() => {
    fetch("https://api.secureme.me/api/v1/follower/following", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setFollowing(data.data);
        const ids = data.data.map((item) => item.id);
        setFollowingIds(ids); // Im passing this as a prop in the SecondModal element
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const [markers, setMarkers] = useState({ // just working as a const, keeping it as a state var for possible map center redirect after market placement
    geocode: [39, -39],
  });

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3177/3177361.png",
    iconSize: [38, 38],
  });

  function handleMarkerPlacer(uid, user) {
    // Places all markers for one user
    setSMarker(false);
    setAllMarker(false);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        end: "2023-07-01",
        start: "2023-01-01",
        userID: uid,
      }),
    };

    fetch(
      "https://api.secureme.me/api/v1/position/history/user",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setMapLocs(data.locations);
        if (data.locations.length == 0) {
          setLabel(` ${user} has no locations!`);
        } else setLabel(`Viewing ${user} locations!`);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }

  function handleLastMarkerPlacer(uid, user) {
    // Places last marker for one user
    setSMarker(false);
    setAllMarker(false);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        end: "2023-07-01",
        start: "2023-01-01",
        userID: uid,
      }),
    };

    fetch(
      "https://api.secureme.me/api/v1/position/history/user",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (
          data.locations[0].Latitude > 90 ||
          data.locations[0].Latitude < -90 ||
          data.locations[0].Longitude > 180 ||
          data.locations[0].Longitude < -180
        ) {
          setLabel(`${user} last location is not valid!`);
          setMapLocs([]);
        } else {
          setLastLocs(data.locations[0]);
          setMapLocs([]);
          setSMarker(true);
          setLabel(`Viewing ${user} last location!`);
        }
      })
      .catch((error) => {
        if (  
          error ==
          "TypeError: Cannot read properties of undefined (reading 'Latitude')" // hotfix, the fetch is sucessful but the Lat and Long that come in the api anwser are undefined since there's no location
        )
          
          setLabel(`${user} has no last location!`);
        console.log("Error fetching data:", error);
      });
  }

  function handleNewDateF(event) {
    setDateF(event.target.value);
  }

  function handleNewDateT(event) {
    setDateT(event.target.value);
  }

  function handleMarkers() { // all markers date filtered
    setSMarker(false);
    setAllMarker(true);
    setLabel("Viewing every location based on the defined time-gap!");
    setMapLocs([]);
    

    const fetchRequests = followingids.map((id) => {

      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          end: dateT,
          start: dateF,
          userID: id,
        }),
      };

      return fetch(
        "https://api.secureme.me/api/v1/position/history/user",
        requestOptions
      )
        .then((response) => response.json())
        .catch((error) => console.log("Failed to fetch:", error));
    });

    Promise.all(fetchRequests)
      .then((responses) => {
        setResponses(responses);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  return (
    <>
      <h1 id="hmiddle">
        <b>
          <label id="lmiddlef">Follo</label>
          <label id="lmiddlem">wing</label>
        </b>
      </h1>
      <label id="lbltextifg">
        Here you can see the locations of those who added you!
      </label>
      <div className="container-fluid" id="first-container">
        <div className="row">
          <div
            className="col-sm-6 d-flex justify-content-center align-items-center"
            id="fc-texttwo"
          >
            <div id="map-container" style={{ width: "75%", height: "400px" }}>
              <MapContainer
                id="mapping"
                center={markers.geocode}
                zoom={1}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "400px" }}
                minZoom={1} 
                maxZoom={15}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Single for 1 user*/}
                {sMarker && lastlocs && (
                  <Marker
                    position={[lastlocs.Latitude, lastlocs.Longitude]}
                    icon={customIcon}
                  >
                    <Popup>
                      <h5 id="hlocs">
                        <b>Last Location</b>
                      </h5>
                      <label>
                        <b>Date:</b> {lastlocs.CreatedAt.split("T")[0]}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Hour:</b> {lastlocs.CreatedAt.slice(11, 16)}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Latitude:</b> {lastlocs.Latitude}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Longitude:</b> {lastlocs.Longitude}{" "}
                      </label>
                    </Popup>
                  </Marker>
                )}
                {/* Multiple for 1 user*/}
                {maplocs?.map((location) => (
                  <Marker
                    key={location.ID}
                    position={[location.Latitude, location.Longitude]}
                    icon={customIcon}
                  >
                    <Popup>
                      <h5 id="hlocs">
                        <b>Location</b>
                      </h5>
                      <label>
                        <b>Date:</b> {location.CreatedAt.split("T")[0]}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Hour:</b> {location.CreatedAt.slice(11, 16)}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Latitude:</b> {location.Latitude}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Longitude:</b> {location.Longitude}{" "}
                      </label>
                    </Popup>
                  </Marker>
                ))}

                { sAllMarker && ( responses.map((response) =>(
                  <React.Fragment key={response.userID}>
                  {" "}
                  {/* Works as a component */}
                  {response.locations?.map((location) => (
                    <Marker
                    position={[location.Latitude, location.Longitude]} 
                    icon={customIcon}
                    key={location.ID}
                    >  
                     <Popup>
                      <h5 id="hlocs">
                        <b>Location</b>
                      </h5>
                      <label>
                        <b>UserID:</b> {location.UserId}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Date:</b> {location.CreatedAt.split("T")[0]}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Hour:</b> {location.CreatedAt.slice(11, 16)}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Latitude:</b> {location.Latitude}{" "}
                      </label>{" "}
                      <br />
                      <label>
                        <b>Longitude:</b> {location.Longitude}{" "}
                      </label>
                    </Popup>
                    </Marker>
                  ))}
                </React.Fragment>
                )))}
              </MapContainer>
              <label id="lblview">{lab}</label>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-3" id="fc-text-one">
            <h1>You're Following</h1>
            <ul id="ullocs" style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {following?.map(
                (
                  item // ? so it will cheack if following is not null or undefined before attempting to access its properties.
                ) => (
                  <li key={item.id}>
                    <b>UserID</b>: {item.id}
                    <br />
                    <b>Username</b>: {item.username}
                    <br />
                    <Modal item={item.id} name={item.username} />
                    <button
                      id="btnmaploc"
                      onClick={() => handleMarkerPlacer(item.id, item.username)}
                    >
                      <i className="bi bi-geo-alt-fill">All Locs</i>
                    </button>
                    <button
                      id="btnmaploc"
                      onClick={() =>
                        handleLastMarkerPlacer(item.id, item.username)
                      }
                    >
                      <i className="bi bi-geo-alt-fill">Last</i>
                    </button>
                  </li>
                )
              )}
            </ul>
            <div className="row" id="rowbtnmodal">
              <div className="col-sm-6">
                <label id="lbllocs1">All recent locations</label>
              </div>
              <div className="col-sm-2">
                <SecondModal
                  followingids={followingids}
                  dateF={dateF}
                  dateT={dateT}
                />
              </div>
              <div className="col-sm-2">
                <button id="btnmaploc" onClick={handleMarkers}>
                  <i className="bi bi-geo-alt-fill"></i>
                </button>
              </div>
            </div>
            <div className="row" id="rowbtnmodal1">
              <label id="lbldatef">From:</label>
              <input
                type="date"
                defaultValue="2023-01-01"
                onChange={handleNewDateF}
              />

              <label id="lbldatet">To:</label>
              <input
                type="date"
                defaultValue="2023-07-01"
                onChange={handleNewDateT}
              />
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

export default Following;
