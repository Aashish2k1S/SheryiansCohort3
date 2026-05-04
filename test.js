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
printXShapePattern(5);

