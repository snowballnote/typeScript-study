export default class Board { // export default 클래스를 외부에서 사용 가능하게 모듈화
    private _no: number;
    private _title: string;

    constructor(){
        this._no = 0;
        this._title = "";
    }

    get no(): number {
        return this._no;
    }
    set no(no: number) {
        this._no = no;
    }
    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}

export const myName = "루피";
export function showMsg(){
    console.log("export/import test!");
}