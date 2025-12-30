import Board from "./Board.js"; // import 새로운변수 from 모듈이름 or 패키지이름
import { myName, showMsg } from "./Board.js";
const board = new Board();
board.no = 1; // set 호출
board.title = "hello"; // set 호출
console.log(board.no, board.title); // get 호출
console.log(myName);
showMsg();
//# sourceMappingURL=boardService.js.map