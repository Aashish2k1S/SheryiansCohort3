import React from "react";
console.log(React);


const root = document.querySelector('#root');

const rh1 = React.createElement('h1', {}, 'Hello World');
console.log(rh1);

ReactDOM.createRoot(root).render(rh1);
