// typescript의 기본타입
// number타입 : 정수, 실수
// bigint타입 : 정수(number보다 범위가 큰), 값뒤에 n접미사 필요
// boolean 타입
// undefined 타입
// null 타입
// 변수 선언 키워드 : let, const
let a = 10;
a = 20;
const b = 20;
// b = 777; 변경 불가 에러뜸
let c = 10n; // bigint값임을 지정하는 접미사 n
const d = 100n;
let e = "hello";
const f = "bye";
let g = true;
const h = false;
let i = null;
// let j: number; // undefined 타입으로 가정
let k = undefined; // 가능하나 굳이 이렇게 쓸 일이 없음
let l;
console.log(a, b, c, d, e, f, g, h, i, k, l);
console.log("a 타입: ", typeof (a));
console.log("b 타입: ", typeof (b));
console.log("i 타입: ", typeof (i));
// 타입을 생략하면...
const x = 100; // 타입스크립트는 초기화시 값을 이용하여 "타입추론"을 할 수 있다.
console.log("x: ", x, "타입은 ", typeof (x));
// 열거타입 : 실제 실행코드는 기본값으로 number값이 할당된다.
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender || (Gender = {}));
const myGender = Gender.Male;
console.log(myGender, "타입은 ", typeof (myGender));
var Gender2;
(function (Gender2) {
    Gender2["Male"] = "\uB0A8";
    Gender2["Female"] = "\uC5EC";
})(Gender2 || (Gender2 = {}));
let yourGender = Gender2.Male;
console.log(yourGender, "타입은 ", typeof (yourGender));
// 튜플타입
const y = [1, "admin", "1234", 2, true];
console.log(y, "타입은 ", typeof (y));
console.log("번호는 ", y[0], "아이디는 ", y[1], "입니다."); // 인덱스를 이용하여 출력
export {};
//# sourceMappingURL=dataType.js.map