// 객체
let member = {id:"test", age: 20}; // 익명객체
// member.name = "홍길동"; // error

let m: {birth: number, addr: string};
m = {birth: 2000, addr: "서울"};
console.log(m.birth, m.addr);

type Person = {
    birth: number, addr: string
};
let p: Person;
p = {birth: 2001, addr: "성남"};
console.log(p.birth, p.addr);

interface Human{
    birth: number,
    addr: string
};
let h: Human = {
    birth: 2003, 
    addr: "성남"
};
console.log(h.birth, h.addr);

const pi: number = 3.14;
// pi = 1.87; // error

const h2: Human = {
    birth: 2001, 
    addr: "성남"
};
h2.addr = "인천";
h2.birth = 1999;
// h2 = {birth: 2001, addr: "성남"};

const arr: string[] = ["a", "b"];
arr[1] = "x";
// arr = ["y", "z"];

// 배열변수뿐만 아니라 배열의 요소가 변경이 안되게(읽기전용) 생성
const arr2: string[] = ["m", "n"] as const;
arr[1] = "test";