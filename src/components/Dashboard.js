import './css/Dashboard.css';
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

function Dashboard(){

    const markers = {
        geocode: [41.1706859839 , -8.60680757276]
    };

    const customIcon = new Icon({
        iconUrl: "   https://cdn-icons-png.flaticon.com/512/3177/3177361.png ",
        iconSize: [38, 38] 
    });

    return(
        <div className="Dashboard">
            <h1 id="hmiddle"><b><label id="lmiddlef">Dash</label><label id="lmiddlem">board</label></b></h1>
            <div className="container-fluid" id="first-container">
                <div className="row">
                    <div  className="col-sm-3" id="fc-textone">
                        <h2>Recent Friends Location</h2>
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
                        <MapContainer id='mapping' center={[41.1706859839 , -8.60680757276]} zoom={13} style={{ width: '100%', height: '400px' }}>
                            <TileLayer 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            />

                                <Marker position={markers.geocode}>
                                </Marker>
                            
                        </MapContainer>
                    </div>
                    </div>
                    <div  className="col-sm-3" id="fc-texttwo">
                        <h2>Update Your Location Manually</h2>
                        <form>
                            <div class="mb-3">
                                <label for="Latitude" class="form-label">Latitude</label>
                                <input type="Latitude" class="form-control" id="exampleInputEmail1"></input>
                                
                            </div>
                            <div class="mb-3">
                                <label for="Longitude" class="form-label">Longitude</label>
                                <input type="Longitude" class="form-control" id="Longitude1"></input>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
            </div>
        </div>
        
            
        </div>
    );
}

export default Dashboard;