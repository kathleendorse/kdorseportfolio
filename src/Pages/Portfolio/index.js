import React from "react";
import ContainerFluid from "../../Components/ContainerFluid";
// import "./style.css";
import Project from "../../Components/Project";

function Portfolio(){


    const projects = [
        {
            id:"1",
            image:"http://res.cloudinary.com/katedorse/image/upload/v1608600061/nightin2.0_vznah1.png",
            title:"Night In",
            desc:"MERN stack app that helps Wine and Food lovers alike curate perfectly matched meals. Search for recipes, receive wine suggestions, save favorites and add ingredients to shopping list.",
            deploy:"https://nightinapp.herokuapp.com/",
            repo:"https://github.com/kathleendorse/NightIn"
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607372512/fitnesstracker_t8lqbt.png",
            title:"Fitness Tracker",
            desc:"Create WorkOuts, Add Exercises and Track Your Stats. Powered by MongoDB.",
            deploy:"https://serene-shore-05740.herokuapp.com/",
            repo:"https://github.com/kathleendorse/WorkOutTracker"
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/weatherdashboard_aflujq.png",
            title:"Weather Dashboard",
            desc:"Search for Current Weather + 5 Day Weather Forecast by Location and view recent searches.",
            deploy:"https://kathleendorse.github.io/WeatherDashboard/",
            repo:"https://github.com/kathleendorse/WeatherDashboard"
        },
        {
            id:"4",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607372407/userdirectory_jfnohx.png",
            title:"Employee Directory",
            desc:"React Employee Directory with additional Search and Sort Features for names.",
            deploy:"https://kathleendorse.github.io/UserDirectory/",
            repo:"https://github.com/kathleendorse/UserDirectory"
        },
        {
            id:"5",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/notetaker_ghez3a.png",
            title:"Note Taker",
            desc:"Online Application allows you to Add, Edit and Delete Your Notes. Powered by Express.",
            deploy:"https://afternoon-cove-63476.herokuapp.com/",
            repo:"https://github.com/kathleendorse/NoteTaker"
        },
        {
            id:"6",
            image:"https://res.cloudinary.com/katedorse/image/upload/v1607326886/burger_gqpuym.png",
             title:"Burger App",
             desc:"Add and Devour Burgers as you please with Express, Handlebars and MySQL.",
            deploy:"https://mysterious-dawn-88307.herokuapp.com/",
            repo:"https://github.com/kathleendorse/burger"
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
