function isAutomorphic(n) {
    // Write your logic here
    if (n<=0) return 'No'; 
    
    let remain = n, temp = 0, sq = n*n, temp2 = 0; 
    let isAutomorphic = true; 

    while(true){
        temp = remain % 10; 
        remain = Math.floor(remain / 10); 
        temp2 = sq % 10; 
        sq = Math.floor(sq / 10); 

        
        if (temp !== temp2) {
            isAutomorphic = false; 
            break; 
        }

        if (remain === 0) break; 
    }
    return (isAutomorphic ? 'Yes' : 'No'); 
}


console.log(isAutomorphic(7));



