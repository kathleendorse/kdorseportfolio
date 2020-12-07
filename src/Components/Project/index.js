import React from "react";
import "./style.css";

function Project(props){
    return(
        // <div className="row">
            //  <div className="col-sm-6">
            <div>
                <div className="portfolio-item">
                    <img className="img-thumbnail" src={props.image} alt={props.title}></img>
                    <div className="caption">
                        <div className="caption-content text-center">
                            <h2 className="h2">{props.title}</h2>
                            <p className="mb-0">{props.desc}</p>
                            <p></p>
                            {/* <hr></hr> */}
                            <p><a href={props.deploy}  rel="noreferrer noopener" target="_blank">View The App</a></p>
                            <p><a href={props.repo}  rel="noreferrer noopener" target="_blank">Visit The App Repo</a></p>
                        </div>


                        
                    </div>
                </div>
                <br></br>
            </div>
            
        // </div>

        /* <div className="col-lg-6">
    <a className="portfolio-item" href="https://afternoon-cove-63476.herokuapp.com/" target="blank">
        <div className="caption">
            <div className="caption-content text-center">
                <div className="h4">Note Taker</div>
                <p className="mb-0">Add, Edit and Delete Notes. Powered by Express.</p> 
            </div>
        </div>    
        <img src="https://res.cloudinary.com/katedorse/image/upload/c_scale,w_901/v1604273122/sqnotetaker_w4wqau.png" className="img-fluid img-thumbnail float-left" alt="Responsive image"></img>
    </a>

</div> */
    );

}

export default Project;







    