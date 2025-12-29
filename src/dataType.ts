// typescript의 기본타입
// number타입 : 정수, 실수
// bigint타입 : 정수(number보다 범위가 큰), 값뒤에 n접미사 필요
// boolean 타입
// undefined 타입
// null 타입

// 변수 선언 키워드 : let, const
let a: number = 10;
a = 20;
const b: number = 20;
// b = 777; 변경 불가 에러뜸

let c: bigint = 10n; // bigint값임을 지정하는 접미사 n
const d: bigint = 100n;

let e: string = "hello";
const f: string = "bye";

let g: boolean = true;
const h: boolean = false;

let i: null = null;
// let j: number; // undefined 타입으로 가정
let k: undefined = undefined; // 가능하나 굳이 이렇게 쓸 일이 없음
let l;

console.log(a, b, c, d, e, f, g, h, i, k, l);

console.log("a 타입: ", typeof(a));
console.log("b 타입: ", typeof(b));
console.log("i 타입: ", typeof(i));

// 타입을 생략하면...
const x = 100; // 타입스크립트는 초기화시 값을 이용하여 "타입추론"을 할 수 있다.
console.log("x: ", x, "타입은 ", typeof(x));

// 열거타입 : 실제 실행코드는 기본값으로 number값이 할당된다.
enum Gender {
    Male=1, Female=2
}
const myGender: Gender = Gender.Male;
console.log(myGender, "타입은 ", typeof(myGender));

enum Gender2 { // string값으로 설정
    Male="남", 
    Female="여"
}
let yourGender: Gender2 = Gender2.Male;
console.log(yourGender, "타입은 ",typeof(yourGender));

// 튜플타입
const y: [number, String, String, number, boolean] 
            = [1, "admin", "1234", 2, true];
console.log(y, "타입은 ", typeof(y));
console.log("번호는 ", y[0], "아이디는 ", y[1], "입니다."); // 인덱스를 이용하여 출력