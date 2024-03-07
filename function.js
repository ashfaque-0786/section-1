function addNums(a,b){
    c=a+b;
    return c;
    
}
const ans = addNums(1,5);
console.log(ans);

const getAvg = function (m1,m2,m3){
    return (m1 +m2 +m3)/3;
}
result = getAvg(55,65,76);
console.log(result);

// es6 arrow function
const factorial = (n) => {
    let fact =1;
    for (let i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}
console.log(factorial(3))