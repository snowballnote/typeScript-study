// 배열 메서드(콜백함수를 매개값으로) - forEach, filter, map, reduce, sort

const arr = [7, 99, 10];
arr.forEach(e => console.log(e)); // 콜백함수(e: 7, 99, 10) 순차적으로 3번 실행

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = nums.filter(e => e % 2 == 0);
console.log(evens); // [ 2, 4, 6, 8 ]

const names = ["루피", "조로", "나미"];
const names2 = names.map(e => e + "님");
console.log(names2); // [ '루피님', '조로님', '나미님' ]

const age = [18, 20, 21, 33];
const ages = age.map(e => Math.trunc(e/10)*10 + "대");
console.log(ages); // [ '10대', '20대', '20대', '30대' ]

const point = [10, 20, 30, 40, 50];
const sum = point.reduce((a, b) => a+b, 0);
console.log(sum); // 150

const point2 = [99, 90, 87, 75, 100, 60];
const max = point2.reduce((a, b) => (a>b ? b : a), -1);
console.log(max);