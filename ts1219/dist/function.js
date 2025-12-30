function add(x, y) {
    const result = x + y;
    return result;
}
const z = add(10, 20);
console.log(z); // 30
// 매개변수에 기본값 지정 가능
function greet(name, word = "hello") {
    console.log(`${word}. ${name}님`);
}
greet("루피"); // hello. 루피님
greet("조로", "반갑습니다"); // 반갑습니다. 조로님
// 가변길이 매개변수 지정
function sum(...val) {
    let total = 0;
    for (let v of val) {
        total += v;
    }
    return total;
}
let total = sum(1, 2, 3, 4, 5);
console.log(total); // 15
total = sum(100, 200);
console.log(total); // 300
// 함수도 변수에 저장
const fun1 = sum;
total = fun1(3, 5, 10);
console.log(total); // 18
const fun2 = function (n) {
    console.log(n * n);
};
fun2(5); // 25
// 화살표 함수
// const fun3 = function(n: number):void => console.log(n*n); // 반환값이 없을때
// 반환타입은 보통 생략 => 우측이 문이면 void, 값(표현식)이면 반환타입
const fun3 = (n) => console.log(n * n); // 반환값이 없을때
const fun4 = (n) => n * n; // => 우측값이 반환값
fun3(10); // 100
let result = fun4(10);
console.log(result); // 100
export {};
//# sourceMappingURL=function.js.map