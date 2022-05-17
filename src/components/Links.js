import React from "react";

function Links(props){
    console.log(props.githubProp)
    return (
        <div id="links">
            <h3>Links</h3>
            <a href= "<a>props.github}">{props.github} </a>
            <a href="{props.linkedin}">{props.linkedin} </a>
        </div>
    )

}

export default Links
