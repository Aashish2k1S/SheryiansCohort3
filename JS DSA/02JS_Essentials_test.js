function greet(name, age) {
    // Write your logic here
    console.log(`Hello ${name} you are ${age} years old.`)
}

module.exports = { greet };


function swapNumbers(a, b) {
    // Write your logic here
    [a,b] = [b,a];
    return [a, b]
}

module.exports = { swapNumbers };

function calculateCompoundInterest(P, r, t, n) {
    // Write your logic here
    return ((P * (1 + r/n) ** (n*t))-P).toFixed(2);
}

module.exports = { calculateCompoundInterest };