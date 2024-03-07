// MAP 
// it is basically modify the value of an element 

nums = [ 23, 29, 99, 32, 67, 30, 41 ];
 const sqrt =  nums.map(( n ) => {
    return n**2;
})
console.log(sqrt);

const nums1 = ["Ashfaque Ahmad " , "raju rastogi "];
const nums2 = nums1.map ((m) => {return  m.split(" ")[0]});
console.log(nums2);

const prices = [2300, 150, 5600, 2500, 900];

const nums3 = prices.map ((z) => {
    return z-(z*0.1)
});
console.log(nums3);

// FILTER
// it is basically compare and check the condition

 const nums4 = prices.filter((p) => {
    return p>1000 && p<3000
 });
 console.log(nums4);

 

