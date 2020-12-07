import React from "react";
import ContainerFluid from "../../Components/ContainerFluid";
import "./style.css";

function About(){
    return(
        <ContainerFluid
        id="about"
        title="Kate Dorse."
        >
            <div className="subheading mb-5 text-center">
                <hr></hr>
                <a href="mailto:kathleen.dorse@gmail.com" rel="noreferrer noopener" target="_blank" >kathleen.dorse@gmail.com</a>
                <br></br>
                <a href="tel:7024087200" >702.408.7200</a>
            </div>
            <div>
                <img id="me" src="https://res.cloudinary.com/katedorse/image/upload/r_30/v1604022101/me_taxlfu.jpg" className="float-left img-fluid pull-left mr-4 me" alt="Kate Dorse"></img>
                <br></br>
                <br></br>
                <p>Full Stack Web Developer based in Chicago, Illinois.</p>
                <p>Certificate from North Western University's School of Professional Studies.</p>
                <br></br>
                <p>Proficiencies:</p>
                <p> Bootstrap . CSS . ES6 . Express . HTML . Javascript . Jquery . MongoDB . Mysql . Node . React .</p>
                <br></br>
            </div>
            <div className="social-icons text-center">
                <a className="social-icon" href="https://www.linkedin.com/in/katedorse/" rel="noreferrer noopener" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="social-icon" href="https://github.com/kathleendorse" rel="noreferrer noopener" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>

        </ContainerFluid>
    );
}

export default About;