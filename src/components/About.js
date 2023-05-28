import './css/About.css'

function About (){
    return(
        <div className='About'>
        
            <h1 id="hmiddle"> about <b><label id="lmiddlef">Find</label><label id="lmiddlem">Me</label></b></h1>
            <div className="container-fluid" id="first-container">
                <div className="row">
                    <div className="col-sm-4">
                        <img
                            id="fc-img-up"
                            className="img-fluid"
                            src="https://picsum.photos/400/200"
                            alt="Unable to Load"
                        />
                    </div>
                    <div  className="col-sm-4" id="fc-textone">
                        <h1>About</h1>
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
                    <div className="col-sm-4">
                        <img
                            id="fc-img-down"
                            className="img-fluid"
                            src="https://picsum.photos/400/200"
                            alt="Unable to Load"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;