import "./css/Following.css";
import "leaflet/dist/leaflet.css";
import Modal from "./Modal";
import SecondModal from "./SecondModal"

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useState, useEffect } from "react";

function Following() {
  const [following, setFollowing] = useState([]);
  const [followingIds, setFollowingIds] = useState([]); // I'll need this to get the last locs in the modal

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
        const ids = following.map((item) => item.id); 
        setFollowingIds(ids); // Im passing this as a prop in the SecondModal element
        
      });
  }, []);

  const [markers, setMarkers] = useState({
    // Need to use useState or else it would auto update to the value placed in the input
    geocode: [41.1706859839, -8.60680757276],
  });

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3177/3177361.png",
    iconSize: [38, 38],
  });
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
                center={[41.1706859839, -8.60680757276]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ width: "100%", height: "400px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={markers.geocode} icon={customIcon}></Marker>
              </MapContainer>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-3" id="fc-text-one">
            <h1>You're Following</h1>
            <ul id="ullocs" style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {following?.map(
                (
                  item // ? so maps will only be called if locs aren't either null or undefined
                ) => (
                  <li key={item.id}>
                    <b>UserID</b>: {item.id}
                    <br />
                    <b>Username</b>: {item.username}
                    <br />
                    <Modal item={item.id} name={item.username} />
                    <button id="btnmaploc">
                      <i class="bi bi-geo-alt-fill"></i>
                    </button>
                  </li>
                )
              )}
            </ul>
            <div className="row" id="rowbtnmodal">
            <SecondModal followingids={followingIds}/>
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
