import React from "react";
import Links from "./Links"

function About(props) {
  console.log(props.links.github)

  function passBio(){
    if(props.bio === "I made this!"){
      return props.bio
    }else{
      return false
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{passBio()}</p> */}
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null }
      

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
