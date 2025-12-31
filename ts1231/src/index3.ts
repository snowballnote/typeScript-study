// 함수, ?선택적 매개변수
function fun1(name: string, age?: number): void{
    console.log(name, age);
}

fun1("test", 10);
fun1("test", undefined);

// 화살표 함수
const fun2 = (name: string, age: number): void => {
    console.log(name, age);
};

const fun3 = (name: string, age: number): string|undefined => {
    console.log(name, age);
    return Math.random() > 0.5 ? name : undefined;
};

// 타입스크립트도 함수는 값으로 전달될 수 있다. -> 함수도 변수 저장된다.
function greet(){
    return "hello";
}

type HelloFun = ()=> string;

// 함수도 타입을 가진다.
// let g: ()=> string = greet;
let g: HelloFun = greet;
let result = g();
console.log(result);

function fun4(): number{
    return 10;
}
function fun5(): string{
    return "test";
}

g = fun5;
// g = fun4; // error

function fun10(name: string, callback: ()=> string){
    let result = callback();
    console.log(name, result);
}

fun10("루피", () =>{
    return "hello";
});