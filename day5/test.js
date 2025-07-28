// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => {
//   console.log(item);
// });

const foods = [
  "쌀",
  "보리",
  "콩",
  "감자",
  "양파",
  "마늘",
  "배추",
  "무",
  "고구마",
  "호박",
];

const poors = ["철수", "영희", "민수"];

let result = [];

poors.forEach((poor) => {
  let item = {
    name: poor,
    items: [],
  };
  result.push(item);
});

foods.forEach((food, idx) => {
  result[idx % poors.length].items.push(food);
});

console.log(result);

console.table(result);
