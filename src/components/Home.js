import "./css/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="container-fluid" id="first-container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-4" id="fc-textone">
            <p id="firstp">
              <label id="lbltext">Find</label>Me is the perfect solution to help you stay connected and
              informed about the location of your loved ones. Our intuitive app
              allows families and groups to share real-time location
              information, offering peace of mind and security in every
              occasion.
            </p>
            <p id="secondp">
              With <label id="lbltext1">Find</label>Me you'll never have to wonder where your loved ones are
              again. Our platform enables you to receive instant location updates and
              even safety notifications. Rest assured knowing that you're always
              connected and informed about the whereabouts of your loved ones.
            </p>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <img
              className="img-fluid"
              src="https://picsum.photos/500/400"
              alt="Unable to Load"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
