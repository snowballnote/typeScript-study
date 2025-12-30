export default class Board {
    _no;
    _title;
    constructor() {
        this._no = 0;
        this._title = "";
    }
    get no() {
        return this._no;
    }
    set no(no) {
        this._no = no;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
export const myName = "루피";
export function showMsg() {
    console.log("export/import test!");
}
//# sourceMappingURL=Board.js.map