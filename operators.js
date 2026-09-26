const a = 10;
const b = 20;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
// console.log(a == b);
// console.log(a != b);
console.log(a === b);
console.log(a !== b);

const age = 25;
const money = 30000;
const price = 35000;

console.log(age >= 18 && money >= price);
console.log(age < 18 || money < price);
console.log(!(age < 18));

if (age >= 18) {
  console.log("du tuoi");
} else {
  console.log("chua du tuoi");
}

if (money >= price) {
  console.log("Mua duoc hang");
} else {
  console.log("khong du tien");
}

const score = 7;

if (score >= 8) {
  console.log("Gioi");
} else if (score >= 6.5) {
  console.log("Kha");
} else if (score >= 5) {
  console.log("Trung binh");
} else {
  console.log("Yeu");
}

const isMember = true;
const money1 = 50000;

if (isMember || money1 >= 50000) {
  console.log("Duoc giam gia");
} else {
  console.log("Khong duoc giam gia");
}

if (age >= 18 && (money >= 35000 || isMember)) {
  console.log("Duoc mua hang");
} else {
  console.log("Khong duoc mua hang");
}
