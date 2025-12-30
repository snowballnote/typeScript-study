class Car {
    // 속성
    _name; // 보통 private변수는 _로 시작
    _color;
    // 셋터/겟터 메서드: 이름은 속성에서 _제외한 이름을 사용
    get name() {
        return this._name;
    }
    get color() {
        return this._color;
    }
    set name(name) {
        this._name = name;
    }
    set color(color) {
        this._color = color;
    }
    // 생성자
    constructor() {
        this._name = "";
        this._color = "white";
    }
    // 매서드
    move() {
        console.log(`${this._name}이 움직인다`);
    }
}
const myCar = new Car();
myCar.name = "그랜저"; // name("그랜저") 셋터가 호출
myCar.move();
console.log(myCar.color); // color() 겟터가 호출
export {};
//# sourceMappingURL=classTest.js.map