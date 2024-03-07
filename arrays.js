const array = ["ahmad", 10, true];
console.log(array);

console.log(typeof(array));
console.log(Array.isArray(array));

const movie = [ "pathan", "javan", "dunki", "iron","man" ];
console.log(movie.length);
console.log("nice".length);

// indexing

console.log(movie[2]);
console.log(movie.indexOf("dunki"));
console.log(movie.at(-2));
movie[2] = "ahmad" ;
console.log(movie[20]);
console.log(movie);
movie[2] = "dunki" ;

// slicing
// it is basically for removing the element
console.log("SLICING");
console.log(movie.slice(1,5)); // 1 denote starting point and 5 denote ending point less than 5

console.log("SLICING");
console.log(movie.slice(0,2));

console.log("SLICING");
console.log(movie.slice(1));

console.log("SLICING");
console.log(movie.slice(-3));
console.log("SLICING END");


// modifying array
movie.push("don");
console.log(movie);
movie.unshift("don 2");
console.log(movie);

movie.pop();
console.log(movie);
movie.shift();
console.log(movie);

// inserting and replacing element
// splice is basically for adding and removing the element 
console.log("SPLICING");
//  movie.splice(3,2);
//  console.log(movie);
movie.splice(2,2);// 2 denote index number and 2 denote the number of element removing from an array 
console.log(movie);
// movie.splice(2,2,"deadpool");
// console.log(movie);
movie.splice(2,0,"deadpool");
console.log(movie);




