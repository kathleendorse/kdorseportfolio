import React from "react";
// import "./style.css";

function ContainerFluid(props){

    return(
        <div className="container-fluid p-0">
            <main className="resume-section" id={props.id}>
                <div className="resume-section-content">
                    <h1 className="mb-0 text-center">{props.title}</h1>
                    {props.children}
                </div>
            </main>
        </div>

    );
}

export default ContainerFluid;  