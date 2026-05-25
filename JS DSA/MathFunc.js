function calculateCompoundInterest(P, r, t, n) {
    // Write your logic here
    return (
        (P * 
            Math.pow((1 + (r/n)) , (n*t))
        )-P
    ).toFixed(2);
}

module.exports = { calculateCompoundInterest };


function swapNumbers(a, b) {
    // Write your logic here
    [a,b] = [b,a];
    return [a,b];
}

module.exports = { swapNumbers };


function calculateTriangleArea(a, b, c) {
    // Write your logic here
    let s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
}

module.exports = { calculateTriangleArea };


function calculateCircleProperties(r) {
    // Write your logic here
    return [
        (2 * Math.PI * r).toFixed(2),
        (Math.PI * Math.pow(r, 2)).toFixed(2)
    ]
}

module.exports = { calculateCircleProperties };