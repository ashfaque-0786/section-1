const num = [ 2,3,45,5,6,78,7];
for (let i = 0;  i< num.length; i++) {
    console.log(num[i]);

    
}
console.log("for of function");

for (let i of num){
    console.log(i);
}
console.log("for each function using arraow function");
num.forEach( (n) => (console.log(n)));

// program sum of all element 
// let sum =0;
// for (let i = 0;  i< num.length; i++) {
//     sum = sum + num[i];
// }
// console.log(sum);

// program sum of all elemnt using arrow for each function
console.log("program");

let sum = 0;
num.forEach((x) => {sum = sum + x ;

})
console.log(sum);

// create a new array with cube of new all array
 let myArr = [];
 for (let i of num){
         myArr.push(i**3);
    
 };
     console.log(myArr);
  
 


const price = [ "$657.3","$887.7","$887.7"];
let arr1 =[];
for ( let p of price) {
    arr1.push(parseInt(p.slice(1)));
    
}
console.log(arr1);



