import './css/Dashboard.css';
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useState, useEffect } from 'react';

function Dashboard(){
  // On load
  const [update, setUpdate] = useState(0);
  const [indicator, setIndicator] = useState("");
  const [lat, setLat] = useState(41.1706859839); // UFP lat, using it as default
  const [long, setLong] = useState(-8.60680757276); // UFP long, using it as default
  const [message, setMessage] = useState("");
  const [markers, setMarkers] = useState({
    // Need to use useState or else it would auto update to the value placed in the input
    geocode: [lat, long],
  });
  const [locs, setLocs] = useState([]);
  const [reverseOrder, setReverseOrder] = useState(false);

  var requestOpt = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("token"),
    },
    body: JSON.stringify({
      end: "2023-07-01",
      start: "2023-01-01",
    }),
  };

  useEffect(() => {
    fetch("https://api.secureme.me/api/v1/position/history", requestOpt)
      .then((response) => response.json())
      .then((data) => {
        const locations = reverseOrder
          ? data.locations.reverse()
          : data.locations;
        setLocs(locations);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [reverseOrder, update, requestOpt]); // re-runs when reverseOrder / updates  changes


  //On click

  function handleLocationDelete(id){

    var requestOptions = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: sessionStorage.getItem("token")
        }
      };
    fetch(`https://api.secureme.me/api/v1/position/${id}`, requestOptions)
    .then(response => response.json())
    .then(data =>{
        setMessage(data.message)
        console.log(data.message);
        setUpdate(update+1);
    })
    .catch(error =>{
        console.error("Error:", error);
    }); 
  }

  const toggleReverseOrder = () => {
    setReverseOrder((value) => !value);
    setUpdate(update+1);
    setMessage(""); //TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP TEMP
  };

  function handleLatChange(event) {
    setLat(event.target.value);
  }

  function handleLongChange(event) {
    setLong(event.target.value);
  }

  function cordfilters(lat, long) {
    if (lat > 90 || lat < -90 || long > 180 || long < -180) {
      setIndicator("Invalid Value");
      setMessage("Wrong Coordinates");
      return false;
    }
    setIndicator("");
    return true;
  }

  function handleUpdate(event) {
    event.preventDefault();

    if (!cordfilters(lat, long)) {
      return;
    }

    setMarkers({
      geocode: [lat, long],
    });

    const sending = {
      Latitude: parseInt(lat),
      Longitude: parseInt(long),
    };

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      },
      body: JSON.stringify(sending),
    };

    fetch("https://api.secureme.me/api/v1/position/", requestOptions)
      .then((response) =>{
        if(response.ok)
            setUpdate(update+1);
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        console.log(data);
      })    
      .catch((error) => console.log("error", error));
  }

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3177/3177361.png",
    iconSize: [38, 38],
  });

  return (
    <div className="Dashboard">
      <h1 id="hmiddle">
        <b>
          <label id="lmiddlef">Dash</label>
          <label id="lmiddlem">board</label>
        </b>
      </h1>
      <div className="container-fluid" id="first-containerdash">
        <div className="row">
          <div className="col-sm-3" id="fc-text-one">
            <h2 id="recentlcs">
              My Locations{" "}
              <button
                id="btnlocs"
                onClick={(event) => {
                  toggleReverseOrder();
                   !reverseOrder
                    ? (event.target.style.transform = "rotate(180deg)")
                    : (event.target.style.transform = "rotate(0deg)");
                }}
              >
                {" "}
                ↓{" "}
              </button>
            </h2>
            <ul id="ullocs" style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {locs?.map(
                (
                  item // ? so maps will only be called if locs aren't either null or undefined
                ) => (
                  <li key={item.id}>
                    Date: {item.CreatedAt.split("T")[0]}
                    <br />
                    <button
                      id="btntrash"
                      onClick={() => handleLocationDelete(item.ID)}
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                    <br />
                    Latitude: {item.Latitude}, Longitude: {item.Longitude}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-sm-6 d-flex justify-content-center">
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
          <div className="col-sm-3" id="fc-texttwo">
            <h2 id="latlongupdt">Update Your Location Manually</h2>
            <form>
              <div className="row mb-4">
                <div className="col-sm-4">
                  <label for="Latitude" className="form-label" id="lbllat">
                    Latitude:
                  </label>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-7" id="colinputlat">
                  <input
                    type="number"
                    className="form-control"
                    id="inputnumberlat"
                    onChange={handleLatChange}
                  ></input>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-sm-4">
                  <label for="Longitude" className="form-label" id="lbllong">
                    Longitude:
                  </label>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-7">
                  <input
                    type="number"
                    className="form-control"
                    id="inputnumberlong"
                    onChange={handleLongChange}
                  ></input>
                </div>
              </div>
              <label
                for="gap"
                id="gap"
                className="d-flex justify-content-center"
              >
                <b>{indicator}</b>
              </label>
              <div
                className="row d-flex justify-content-center"
                id="row-btncords"
              >
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="btnupdatecors"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          <label id="gap2" className="d-flex justify-content-center">
            {message}
          </label>
        </div>
      </div>
      <div className="container" id="containerSOS">
        <button type="submit" className="btn btn-default shadow" id="buttonSOS">
          <b>SOS</b>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;