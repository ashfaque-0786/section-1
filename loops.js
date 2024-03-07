for(let i=0;i<10;i++)
{
    console.log(i);
}
const num=["ahmad",7,2,3,4,5,6,];
for(let n of num){
    console.log(n);

}
// find sum of all number from 100 to 300 which are divisible 7 and 11
let sum=0;
for ( let i =100 ; i<=300 ; i++)
{
    if (i%7=== 0 && i%11===0) {
        console.log(i);
        sum = sum +i;

    }
}
console.log("Sum is ",sum);
