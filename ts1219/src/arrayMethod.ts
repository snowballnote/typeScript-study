const arr1: number[] = [1, 2, 3, 4];
arr1.push(5);
console.log("arr1(push):", arr1); // arr1(push): [ 1, 2, 3, 4, 5 ]
arr1.unshift(0);
console.log("arr1(unshift):", arr1); // arr1(unshift): [ 0, 1, 2, 3, 4, 5 ]

const arr2: number[] = [1, 2, 3, 4];
const e2 = arr2.pop();
console.log("arr2:", arr2); // arr2: [ 1, 2, 3 ]
console.log("arr2(pop) e2:", e2); // arr2(pop) e2: 4

const shiftE = arr2.shift();
console.log("arr2:", arr2); // arr2: [ 2, 3 ]
console.log("arr1(shift) shiftE:", shiftE); // arr1(shift) shiftE: 1

// 두개이상의 배열을 합칠때 concat
const arr3 = [4, 5, 6];
const arr4 = [100, 200];
const arr5 = arr3.concat(arr4);
console.log(arr5); // [ 4, 5, 6, 100, 200 ]
const arr6 = arr3.concat(arr4, [17, 27, 37]);
console.log(arr6); // [ 4,  5,  6, 100, 200, 17, 27,  37 ]
 
// 배열 -> 문자열 join
const arr7 = ["루피", "조로", "나미"];
const names = arr7.join("-"); // arr7.join(",")
console.log(names); // 루피-조로-나미 // 루피,조로,나미

// ※ 문자열 -> 배열 "루피, 조로, 나미" -> ["루피", "조로", "나미"]
const arr8 = names.split("-");
console.log("arr8:", arr8); // arr8: [ '루피', '조로', '나미' ]

const const8 = ["루피", "조로", "나미", "상디", "조로"];
console.log(arr8.indexOf("조로")); // 없으면 -1, 있으면 첫번째 값의 인덱스 // 1
console.log(arr8.indexOf("로키")); // -1
console.log(arr8.includes("조로")); // true
console.log(arr8.includes("로키")); // false

const arr10 = [4, 5, 6, 100, 200, 17, 27, 37];
arr10.sort((x, y)=>x-y); // 오름차순
console.log("오름차순:", arr10); // 오름차순: [4, 5, 6, 17, 27, 37, 100, 200]

// arr10.sort((x, y)=>y-x); // 내림차순 - 기본값
arr10.sort(); // 내림차순
console.log("내림차순:", arr10); // 내림차순: [100, 17, 200, 27, 37, 4, 5, 6]