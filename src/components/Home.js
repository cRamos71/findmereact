import './css/Home.css';

function Home (){
    return(
    <div className='Home'>
        <div className="container-fluid" id="first-container">
        <div className="row">
            <div className="col-sm-6" id="fc-textone">
            <h1>Lorem Ipsum</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
            <img className="img-fluid" src="https://picsum.photos/500/500" alt="Unable to Load" />
            </div>
        </div>
        </div>
        
        <div className="container-fluid" id="second-container">
            <div className="row">
                <div className="col-sm-5">
                <img className="img-fluid" src="https://picsum.photos/500/500" alt="Unable to Load" />
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-6" id="fc-textwo">
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;