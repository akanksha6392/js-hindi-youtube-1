let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1

let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn);

// 1 => true; 0 => false
//"" => false
// "akanksha" => true
let someNumber = 33

let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// **********operation *
let value = 3
let negValue = -value
console.log(negValue);
console.log(2+2);


let str1 = "hello"
let str2 = " Akanksha"
let str3 = str1 + str2
console.log(str3);
// its not good code
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(+true);
console.log(+"");

//its write code
console.log("1" + (2 + 2));
console.log((1 + 2) + "2");
console.log ( (3+4) * 5 % 2);
