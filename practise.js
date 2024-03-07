// create a new array with cube of new all array using for each arrow function
Arr = [1, 2, 3, 4, 5];
console.log(Arr);
let newArr = [];
Arr.forEach((i) => newArr.push(i ** 3));
console.log(newArr);

// program to remove $ sign and convert it into an integer from  an array

const Arr1 = ["$6785.6", "$567.87", "$597.9"];
const Arr2 = [];
Arr1.forEach((i) => {
  Arr2.push(parseInt(i.slice(1)));
});
console.log(Arr1);
console.log(Arr2);

Arr1.push("don");
console.log(Arr1);
Arr1.unshift("don 2");
console.log(Arr1);
Arr1.shift("don 2");
console.log(Arr1);
Arr1.pop("don");
console.log(Arr1);
console.log("SPLIICNG");
// splice is basically for adding and removing the element
const name = ["ashfaque", "ahmad", "ansari"];
console.log(name);
// name.splice(1,2);
console.log(name);
// name.splice(1,2,"khan");
console.log(name);
console.log(name.slice(0, 3));

// PRACTISE QUESTIONS
// Q - create a new array containing only even number
const nums = [23, 29, 99, 32, 67, 30, 41];
const nums1 = [];
console.log(nums);
nums.forEach((i) => {
  if (i % 2 == 0) {
    nums1.push(i);
  }
});
console.log(nums1);

// Q-  create a new array containing square of each element of above array
const nums2 = [];
nums.forEach((i) => {
  nums2.push(i * i);
});
console.log(nums2);
// Q - create a new array with price greater than 2000 and less than 3000
const prices = [2300, 150, 5600, 2500, 900];
console.log(prices);
const newPrices = [];
prices.forEach((i) => {
  if (i > 2000 && i < 3000) {
    newPrices.push(i);
  }
});
console.log(newPrices);

// Q- create a new array containing first name of each full name stored in another array
//  const fullName = [
//    "Ashfaque Ahmad",
//    "Salman Khan",
//    "Shahrukh Khan ",
//    "Aamir khan",
//  ];
//  const firstName = [];
//  fullName.forEach((i) => {
//     result = fullName.split(" ");
   // let final =  result.pop();
   //  push.firstName(final);
  
  // console.log(result);
//  console.log(firstName);

//  fullName = "Ashfaque Ahmad";
//  result = fullName.split(" ");

//  console.log(result.unshift);

// base = 20 ;
// height = 30;
// function traingle(base,height) {
// result = return (1/2*base*height);
  
// }
// console.log(traingle);


console.log(["a","b","c"] join(""));









































