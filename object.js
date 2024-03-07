const user = {
    name : 'Ashfaque',
    mail : 'ashfaque@gmail.com',
    password: '12344'
};
console.log(user.name);
console.log(user.mail);
console.log(user);
console.log(user['password']);

user.password = 'adfvyc';
console.log(user.password);
user.address= 'Lucknow';
console.log(user.address);

delete user.address;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand : 'Samsung',
    model : '523',
    price : '80000',
    colors : [ 'black', 'silver','yellow']
};
console.log(smartphone.price);
console.log(smartphone.colors);
console.log(smartphone.colors.length);
console.log(smartphone.colors[1]);
console.log(smartphone.colors[1].length);

smartphone.colors[0] = 'red';
console.log(smartphone.colors);

const phoneArray = [
    {
    brand : 'Samsung',
    model : '523',
    price : '80000',
    colors : [ 'black', 'silver','yellow']} ,
    {
    brand : 'Apple',
    model : 'iphone 16',
    price : '90000',
    colors : [ 'black', 'blue']} ,
    {
    brand : 'Oneplus',
    model : 'Nord ce 2',
    price : '50000',
    colors : [ 'yellow', 'neon', 'blue']} ,
    {
    brand : 'vivo',
    model : 'y3s',
    price : '40000',
    colors : [ 'gold', 'silver']} ,
]
console.log("--------------------------------------");
console.log(phoneArray.length);
console.log(phoneArray[2].colors[1]);
console.log(phoneArray[2].colors);
console.log(phoneArray[2].brand);
phoneArray[3].price = "10000";
console.log("--------------------------------");
console.log(phoneArray);

phoneArray[1].colors.push("pink");
console.log(phoneArray);


// filter all phone 
console.log("--------------------------------");
const result = phoneArray.filter((x)=>{
    return x.price<60000
})
console.log(result);
console.log("--------------------------------");

const result1 = phoneArray.filter((y)=>{
    return y.colors.includes("blue")
}

)
console.log(result1);
console.log("--------------------------------");
const models = phoneArray.map ((phone )=>{
    return phone.model
})
console.log(models);
console.log("--------------------------------");

const models1 = result1.map ((phone )=>{
    return phone.model
})
console.log(models1);
console.log("--------------------------------");


