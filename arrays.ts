/* const lenguajes: Array<string> = []; */
/* const lenguajes: string[] = []; */
const lenguajes: (string | number)[] = [];

lenguajes.push("Js");

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];
type CellValue = "X" | "O";

const gameBoard: GameBoard = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
