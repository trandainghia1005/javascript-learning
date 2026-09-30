console.log(Boolean(0));
console.log(Boolean(""));

const name = "";
console.log(name || "Khach");
//Khach
const name1 = "Anh Den";
console.log(name1 || "Khach");
//Anh Den
const quantity = 0;
console.log(quantity || 10);
//10
const quantity1 = 5;
console.log(quantity1 || 10);
//5
const hasChicken = true;
console.log(hasChicken && "Co ga");
//Co ga

console.log(null ?? "Hello");
//Hello
console.log(undefined ?? "Hello");
//Hello
console.log("" ?? "Hello");
//""
console.log(0 ?? 100);
//0
console.log(false ?? true);
//false
console.log("Anh Den" ?? "Khach");
//Anh Den
console.log(null || "A");
//A
console.log(0 || "A");
//A
console.log(0 ?? "A");
//0
console.log("" || "Com ga 20 off");

let a, b;
const result = a !== null && a !== undefined ? a : b;

console.log(result);

let name2 = "";
name2 ||= "Khach";
console.log(name2);

let name3 = "Anh";
name3 ||= "Khach";
console.log(name3);

let quantity2 = 0;
quantity2 ||= 10;
console.log(quantity2);

let quantity3 = 0;
quantity3 ??= 10;
console.log(quantity3);

let name4 = "Anh";
name4 &&= "Den";
console.log(name4);

let name5 = "";
name5 &&= "Den";
console.log(name5);

let name6 = null;
name6 ??= "Khach";
console.log(name6);

let name7 = "";
name7 ??= "Khach";
console.log(name7);

let price1 = 0;
price1 ||= 35000;
console.log(price1);

let price2 = 0;
price2 ??= 35000;
console.log(price2);
