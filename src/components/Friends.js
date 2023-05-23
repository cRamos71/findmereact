import './css/Friends.css';

function Friends(){
    return(
        <>
        <h1 id="hmiddle"><b><label id="lmiddlef">Fri</label><label id="lmiddlem">ends</label></b></h1>
        <div className="container-fluid" id="first-container">
            <div className="row">
                <div className="col-sm-5" id="fc-textone">
                    <h1>Your Friend List</h1>
                        <ul>
                        <li> PAULA </li>
                        </ul>
                </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5" id="fc-textwo"> 
                <h1>Search for a friend</h1>
                                <div className='col-sm-4'>
                                <label for="friendname" className="form-label" id='friendname'>Enter your friend name:</label>
                                </div>
                                <div className='col-sm-1'></div>
                                <div className='col-sm-7' id="colinputfn">
                                <input type="number" className="form-control" id="inputfname"></input>
                                </div>
            </div>
            </div>
        </div>
        <div className='container' id='containerSOS'>
            <button type="submit" className="btn btn-default shadow" id="buttonSOS" ><b>SOS</b></button>
        </div>
        </>
    );
}

export default Friends