//RIGHT TRIANGLE STAR PATTERN 

function printRightTriangle(n) {
    // Write your logic here
    if (!n) return;
    let str = ''; 
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) process.stdout.write("* ");
        if (i !== n) process.stdout.write("\n");
    }    
}

module.exports = { printRightTriangle };

function printRightTriangleNumbers(n) {
    // Write your logic here
    if (!n) return;
    let str = ''; 
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) process.stdout.write(`${j} `);
        if (i !== n) process.stdout.write("\n");
    }
}

module.exports = { printRightTriangleNumbers };

function printRightTriangleAlphabets(n) {
    // Write your logic here
    if (!n) return;
    let str = ''; 
    let num = 'A'.charCodeAt(0) + n -1;

    for (let i = 'A'.charCodeAt(0); i <= num; i++) {
        for (let j = 'A'.charCodeAt(0); j <= i; j++) process.stdout.write(`${String.fromCharCode(j)} `);
        if (i !== n) process.stdout.write("\n");
    }
}

module.exports = { printRightTriangleAlphabets };

function printInvertedRightTriangle(n) {
    // Write your logic here
    if (!n) return;
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) process.stdout.write(`* `);
        process.stdout.write("\n");
    }
}

module.exports = { printInvertedRightTriangle };

function printMirroredRightTriangle(n) {
    // Write your logic here
    if (!n) return;
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            if (j >= i) process.stdout.write(` *`);
            else process.stdout.write(` `);
        }
        process.stdout.write("\n");
    } 
}

module.exports = { printMirroredRightTriangle };

function printVShapePattern(n) {
    // Write your logic here
    if (!n) return;
    else if ((n*2)-1 %2 === 0) return; 

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= (n*2)-1; j++) {
            if (i === j || (i+j) === (n*2)) process.stdout.write(`*`);
            else process.stdout.write(` `);
        }
        process.stdout.write("\n");
    }   
}

module.exports = { printVShapePattern };


function printXShapePattern(n) {
    // Write your logic here
    if (!n) return;
    else if (n%2 === 0) return; 

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j || (i+j) === (n+1)) process.stdout.write(`*`);
            else process.stdout.write(` `);
        }
        process.stdout.write("\n");
    }  
}

module.exports = { printXShapePattern };