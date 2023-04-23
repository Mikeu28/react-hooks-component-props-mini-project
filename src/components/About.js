import React from "react";

function About (props) {
    return (
        <aside>
            <img src = {props.image == null ? "https://via.placeholder.com/215" : props.image} alt = "Blog Logo"></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About;