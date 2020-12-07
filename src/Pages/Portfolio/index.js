import React from "react";
import ContainerFluid from "../../Components/ContainerFluid";
import "./style.css";
import Project from "../../Components/Project";

function Portfolio(){


    const projects = [
        {
            id:"1",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/notetaker_ghez3a.png",
            title:"Note Taker",
            desc:"Add, Edit and Delete Notes Online. Powered by Express.",
            deploy:"https://afternoon-cove-63476.herokuapp.com/",
            repo:"https://github.com/kathleendorse/NoteTaker"
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/burger_gqpuym.png",
             title:"Burger App",
            desc:"Add and Devour Burgers as you please. Powered by Node Exporess, Handlebars and MySQL.",
            deploy:"https://mysterious-dawn-88307.herokuapp.com/",
            repo:"https://github.com/kathleendorse/burger"
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/fitnesstracker_cltgqr.png",
            title:"Fitness Tracker",
            desc:"Create WorkOuts, Add Exercises and Track Your Stats. Powered by MongoDB.",
            deploy:"https://serene-shore-05740.herokuapp.com/",
            repo:"https://github.com/kathleendorse/WorkOutTracker"
        },
        {
            id:"4",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/nightin_s0e2sn.png",
            title:"Night In",
            desc:"Curate the Perfect Night In From Drinks to Dinner and a Movie.",
            deploy:"https://nrouhanizdeh.github.io/Night-In-App/",
            repo:"https://github.com/nrouhanizdeh/Night-In-App"
        },
        {
            id:"5",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/weatherdashboard_aflujq.png",
            title:"Weather Dashboard",
            desc:"Search by Location for Current + 5 Day Weather Forecast.",
            deploy:"https://kathleendorse.github.io/WeatherDashboard/",
            repo:"https://github.com/kathleendorse/WeatherDashboard"
        },
        {
            id:"6",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/userdirectory_weuqws.png",
            title:"Employee Directory",
            desc:"React App with with Search and Sort Features.",
            deploy:"https://kathleendorse.github.io/UserDirectory/",
            repo:"https://github.com/kathleendorse/UserDirectory"
        },
    ];

    // <div className="row">
    // <div className="col-sm-6">


    return(
        <ContainerFluid
        id="portfolio"
        title="Portfolio."
        >
            <hr></hr>
            <br></br>
            <div className="row no-gutters">
                {projects.map((project) => (
                    <Project key={project.id}
                    image={project.image}
                    title={project.title}
                    desc={project.desc}
                    deploy={project.deploy}
                    repo={project.repo}
                    ></Project>
                ))}
            </div>

























        </ContainerFluid>
    );
}

export default Portfolio;
