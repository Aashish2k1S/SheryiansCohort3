function is_neon(nStr) {
    // Write your code here
    let n = parseInt(nStr);

    if (n < 0) return 'No';

    let sq = n*n, sum = 0;

    while(sq > 0){
        sum += sq%10; 
        sq = Math.floor(sq/10); 
    }
    return sum === n ? 'Yes' : 'No';
}

console.log(is_neon('9'));
