// 객체
let member = { id: "test", age: 20 }; // 익명객체
// member.name = "홍길동"; // error
let m;
m = { birth: 2000, addr: "서울" };
console.log(m.birth, m.addr);
let p;
p = { birth: 2001, addr: "성남" };
console.log(p.birth, p.addr);
;
let h = {
    birth: 2003,
    addr: "성남"
};
console.log(h.birth, h.addr);
const pi = 3.14;
// pi = 1.87; // error
const h2 = {
    birth: 2001,
    addr: "성남"
};
h2.addr = "인천";
h2.birth = 1999;
// h2 = {birth: 2001, addr: "성남"};
const arr = ["a", "b"];
arr[1] = "x";
// arr = ["y", "z"];
// 배열변수뿐만 아니라 배열의 요소가 변경이 안되게(읽기전용) 생성
const arr2 = ["m", "n"];
arr[1] = "test";
export {};
//# sourceMappingURL=index2.js.map