function findGreatest(a, b) {
    // Write your code here
    return (a > b) ? a : b;
}

module.exports = { findGreatest };


function checkEvenOrOdd(num) {
    // Write your logic here
    return (num % 2 === 0) ? "Even" : "Odd";
}

module.exports = { checkEvenOrOdd };

function checkVoterEligibility(name, age) {
    // Write your logic here
    return (age >= 18) 
    ? `${name} is a valid voter.` 
    : `${name} is not a valid voter.`;
}

module.exports = { checkVoterEligibility };


function isLeapYear(year) {
    // Write your logic here
    if (year % 100 === 0 ) { 
        return (year % 400 === 0) 
        ? `Leap Year` 
        : `Not a Leap Year`;
    }
    else if (year % 4 === 0 ){
        return `Leap Year`;
    }
    else {
        return `Not a Leap Year`;
    }
}

module.exports = { isLeapYear };


function calculateFinalAmount(amount) {
    // Write your logic here
    if (amount > 9000) return (amount) - (amount * 0.2);
    else if (amount > 7000) return (amount) - (amount * 0.1);
    else if (amount > 5000) return (amount) - (amount * 0.05);
    else return amount; 
}

module.exports = { calculateFinalAmount };


function calculateElectricityBill(unit) {
    // Write your logic here
    if (unit > 400) 
        return ( ((unit - 400) * 13) + (200 * 8) + (100 * 6) + (100 * 4.2) ).toFixed(1);
    else if (unit > 200) 
        return ( ((unit - 200) * 8) + (100 * 6) + (100 * 4.2) ).toFixed(1);
    else if (unit > 100) 
        return ( ((unit - 100) * 6) + (100 * 4.2) ).toFixed(1);
    else 
        return ( unit * 4.2 ).toFixed(1);
}

module.exports = { calculateElectricityBill };