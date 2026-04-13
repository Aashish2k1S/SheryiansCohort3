function fact(n){
  if (n === 0 || n === 1) return 1; 
  else if (n < 0) return undefined; 
  else {
    let fact = 1; 
    for (let i = 2; i <= n; i++) fact *= i; 
    return fact; 
  }
}

function isStrongNumber(n) {
  if (n < 0) return "No";

  let sum = 0, remain = n, temp = 0; 
  while (true){
    temp = remain % 10; 
    remain = Math.floor(remain/ 10);     
    
    sum += fact(temp); 

    if (remain === 0) break;       
  }

  return (sum === n ? 'Yes' : 'No');
}


console.log(isStrongNumber(123));



