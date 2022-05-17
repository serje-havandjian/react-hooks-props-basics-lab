import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color={"firebrick"} name={"Liza"} city={"New York"} />
      <About bio={"I made this!"} links={{github:"https://github.com/lizahttps://github.com/liza", linkedin:"https://www.linkedin.com/in/liza/"}} />
    </div>
  );
}

export default App;
