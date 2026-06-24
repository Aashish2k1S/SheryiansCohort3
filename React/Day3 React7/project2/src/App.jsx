import React from 'react'
import About from './About.jsx'

const App = () => {
  // let elem = React.createElement("div", {}, [
  //   React.createElement("h1", {}, "hello"), 
  //   React.createElement("h2", {}, "Bye"), 
  //   React.createElement("h3", {}, "vapus ao")
  // ]);
  // return elem;

  return (
    <div>
      <h1>hello</h1>
      <h2>Bye</h2>
      <h3>vapus ao</h3>
      {/* {About("args")} */}
      {/* will be passing props object */}
      <About width="300" name="Aashish" children="temp"> 
        <h1>Children hello</h1>
      </About>
    </div>
  );
}

export default App