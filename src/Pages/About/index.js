import React from "react";
import ContainerFluid from "../../Components/ContainerFluid";
// import "./style.css";

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
                <p>I am a self-motivated problem-solver who went into my full stack program with almost no technical background.  I know that I have so much to learn but for the first time in my life, that isn’t scary, it’s exciting!  I love that the culture of web development is inherently grounded in learning, process improvement and collaboration. There’s always a new package or language to learn, a new challenge posed by your current project and ways to improve code you’ve already written.  I don’t think you can truly be successful at it unless you’re passionate about your work.    
                </p>
                <p>Communication and collaboration are two of my strengths. I can effectively convey technical aspects to non-technical groups and will adapt to changing situation to take on whatever is necessary to get the job done.  I am highly organized and place high emphasis on balancing design and functionality.</p>
                <br></br>
                <p>Proficiencies:</p>
                <p>Axios . Bootstrap . CSS . ES6 . Express . Handlebars.js . HTML . Javascript . Jquery . MongoDB . Mysql . Node.js . React .</p>
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
