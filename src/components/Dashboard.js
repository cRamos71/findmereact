import './css/Dashboard.css';
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useState } from 'react';

function Dashboard(){

    const [lat, setLat] = useState(41.1706859839); // UFP lat, using it as default
    const [long, setLong] = useState(-8.60680757276); // UFP long, using it as default
    const [markers, setMarkers] = useState({   // Need to use useState or else it would auto update to the value placed in the input
        geocode: [lat, long]
      });

    function handleLatChange(event){
        setLat(event.target.value);
    };

    function handleLongChange(event){
        setLong(event.target.value);
    }

    function handleUpdate(event){
        event.preventDefault();

        setMarkers({
            geocode: [lat, long]
        })
        
        const sending = {
            Latitude: lat,
            Longitude: long
          };

        var requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem("token")
        },
        body: JSON.stringify(sending),
        
        };

        fetch("https://api.secureme.me/api/v1/position", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
           
    };
        
    

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/3177/3177361.png",
        iconSize: [38, 38] 
    });

    return(
        <div className="Dashboard">
            <h1 id="hmiddle"><b><label id="lmiddlef">Dash</label><label id="lmiddlem">board</label></b></h1>
            <div className="container-fluid" id="first-container">
                <div className="row">
                    <div  className="col-sm-3" id="fc-text-one">
                        <h2 id='recentlcs'>Recent Friends Location</h2>
                            <ul className="list-group">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A fourth item</li>
                                <li className="list-group-item">And a fifth one</li>
                            </ul>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center">
                    <div id="map-container" style={{ width: '75%', height: '400px'}}>
                        <MapContainer id='mapping' center={[41.1706859839 , -8.60680757276]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '400px' }}>
                            <TileLayer 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            />

                                <Marker 
                                position={markers.geocode}
                                icon={customIcon}>
                                </Marker>
                            
                        </MapContainer>
                    </div>
                    </div>
                    <div  className="col-sm-3" id="fc-texttwo">
                        <h2 id='latlongupdt'>Update Your Location Manually</h2>
                        <form>
                            <div className="row mb-4">
                                <div className='col-sm-4'>
                                <label for="Latitude" className="form-label" id='lbllat'>Latitude:</label>
                                </div>
                                <div className='col-sm-1'></div>
                                <div className='col-sm-7' id="colinputlat">
                                <input type="number" className="form-control" id="inputnumberlat" onChange={handleLatChange}></input>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className='col-sm-4'>
                                    <label for="Longitude" className="form-label" id='lbllong'>Longitude:</label>
                                </div>
                                <div className='col-sm-1'></div>
                                <div className='col-sm-7'>
                                    <input type="number" className="form-control" id="inputnumberlong" onChange={handleLongChange}></input>
                                </div>
                            </div>
                            
                            <div className='row d-flex justify-content-center' id='row-btncords'>
                                <button type="submit" className="btn btn-primary" id='btnupdatecors' onClick={handleUpdate}>Update</button>
                            </div>
                            
                        </form>
                    </div>
            </div>
        </div>
        <div className='container' id='containerSOS'>
            <button type="submit" className="btn btn-default shadow" id="buttonSOS" ><b>SOS</b></button>
        </div>
            
        </div>
    );
}

export default Dashboard;