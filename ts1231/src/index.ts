// 1. 타입
let addr: string = "가산";
// addr = 10;

let addr2;
addr2 = 1;
addr2 = "test";
addr2 = true;

let addr3 = "가산"; // 초기값으로 타입을 추론한다.(타입추론/타입유추)

let name: string | null | undefined = null; // 유니언 타입
name = undefined;
name = "루피";

let x = Math.random() > 0.5 ? 17 : "hi"; // number | string
/*
x = 10;
x.toFixed();
x = "조로";
x.toUpperCase();
*/
if(typeof x === "string"){ //typeof 실행시 타입을 문자열로 반환
    x.toLocaleLowerCase();
}else if(typeof x === "number"){
    x.toFixed();
}

typeof x === "string" ? x.toUpperCase() : x.valueOf();

const myName = "구디";

let z: number | "거북선" | "잠수함";
z = 10;
// z = "test"; // error
z = "거북선";
z = "잠수함";

let gender: "남" | "여";
gender = "남";

let boy;
console.log(boy); // undefined

let man: string | undefined;
console.log(man);

type MyString = string; // 타입 별칭
let id: MyString = "admin";

type Gender = "남" | "여";
let gen: Gender;
gen = "남";
gen = "여";
// gen = "남자"; // error

type ID = string | number;
let myId = "admin";
let yourId = 1001;

// 튜플 : 배열(개별타입과 길이가 고정)
let arr1: number[] = [3, 5, 1];
arr1.push(7); // 동적배열
// arr1.push("7"); // error 타입고정

let arr2: [number, string, number] = [1, "test", 2]; // 타입고정
arr2 = [10, "x", 100];
// arr2 = [10, "x", "100"]; // error 타입 불일치

type Point = [number, number]; // 튜플타입 별칭
let point: Point = [2, 3];


