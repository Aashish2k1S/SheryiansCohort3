/* 
    ? To study:  
    Updation in React 
    Reconciliation 
    Diffing 
    Phases: Render Phase, Commit Phase 
    What is Fibre in React? 
    Babel / OXC 
    React Fibre Architecture 

    https://medium.com/@ddhote780/react-behind-the-scenes-virtual-dom-reconciliation-render-phase-commit-phase-fiber-explained-c7625609491a
*/

// console.log(Window); 
// console.log(React); 

const h1 = document.createElement('h1')
h1.textContent = "hello from real DOM"

console.dir(h1);
console.log(h1);


const rh1 = React.createElement("h1", null,
    React.createElement("span", null, "I am span")
);
console.dir(rh1);
console.log(rh1);

// ReactDOM
const main = document.querySelector("#main");
const root = ReactDOM.createRoot(main);
root.render(rh1); 
