import './css/Contacts.css'

function Contacts (){
    return(
        <div className='Contacts'>
            <h1 id="hmiddle"> contact <b><label id="lmiddlef">Find</label><label id="lmiddlem">Me</label></b></h1>
            <div className="container-fluid" id="first-container">
            <div className="row">
                <div  className="col-sm-5" id="fc-textone">
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
                <div className="col-sm-2"></div>
                <div id="form" className="col-sm-5">
                    <form id="formid" className="col-10 col-md-8 col-lg-6">
                        <h1 id="hformsform"><b>Form</b></h1>
                        <div className="form-group">
                            <div className="input-group" id="email1">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label for="name"><b>Name</b>:</label>
                                        <input placeholder="Name" className="form-control" id="email"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="name"><b>Surname</b>:</label>
                                        <input placeholder="Surname" className="form-control" id="email"/>
                                    </div>
                                </div>
                            </div>
                            <label for="email"><b>Email</b>:</label>
                            <div className="input-group" id="email1">
                                <input type="email" placeholder="email@domain.com" className="form-control" id="email"/>
                            </div>
                        </div>                                          
                        <div className="form-group">
                            <label for="link"><b>Date</b>:</label>
                            <div className="input-group" id="link1">
                                    <div className="col-sm-auto">
                                    </div>
                                    <div className="col-sm-auto">
                                        <input type="date" className="form-control" id="date-form"/>
                                    </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="subject" className=""><b>Motive</b>:</label>
                            <div className="input-group" id="subject1">
                                <select className="form-select" id="subject">
                                    <option value="none" selected disabled hidden>Choose an option</option>
                                    <option value="problems">Problems</option>
                                    <option value="info">Information</option>
                                    <option value="jobapp">Job Application</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group" id="textarea1">
                                <label for="typebox"><b>Situacion</b>:</label>
                                <textarea name="problema" id="textarea1" cols="400" rows="3" placeholder="What can we do for you?"></textarea>
                            </div>
                        </div>
                        <div id="row-buttons" className="row">
                        <div className="d-flex col-sm-6 justify-content-center"><button type="submit" className="btn btn-default shadow-none" id="button"><b>Send</b></button></div>
                        <div className="d-flex col-sm-6 justify-content-center"><button type="reset" className="btn btn-default shadow-none" id="button"><b>Clear</b></button></div>
                        
                        
                    </div>
                    </form>
                </div>
            </div>
            </div>
        </div> 
    );
}

export default Contacts