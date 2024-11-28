import knightMoves from "./knight-moves.js";

const path = knightMoves([0, 0], [3, 4]);
if (path) {
  console.log("Path: ", path);
  console.log("Path length: ", path.length - 1);
} else {
  console.log("invalid move");
}
