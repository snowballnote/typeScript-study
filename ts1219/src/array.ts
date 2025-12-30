// 배열
let nums: number[] = [7, 4, 1];
console.log(nums);
console.log(nums[1]); // 4
nums = [100, 200];
console.log(nums); 

// const 선언시
const names: string[] = ["루피", "조로", "나미"];
names[2] = "상디"; // names가 상수지, names[index]는 상수가 아니다.
console.log(names);
// names = ["a", "b"]; // error names는 상수이다.

// 배열의 메서드
names.push("로빈"); // 마지막에 데이터 추가
console.log(names); // [ '루피', '조로', '상디', '로빈' ]
names.unshift("쵸파"); // 처음에 데이터 추가
console.log(names); // [ '쵸파', '루피', '조로', '상디', '로빈' ]

let names2 = [ '쵸파', '루피', '조로', '상디', '로빈' ];
names2.splice(2, 2); // 인덱스 2부터 2개 - 원본배열이 변경
console.log(names2); // [ '쵸파', '루피', '로빈' ]

names2 = [ '쵸파', '루피', '조로', '상디', '로빈' ];
let result = names2.slice(3); // 3부터 나머지까지 - 원본배열에서 일부를 추출
console.log(names2); // [ '쵸파', '루피', '조로', '상디', '로빈' ]
console.log(result); // [ '상디', '로빈' ]

result = names2.slice(2, 4); // 2번째부터 4-1(=3)번째 까지
console.log(result); // [ '조로', '상디' ]