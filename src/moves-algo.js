export default function possibleMoves(position) {
  //old positions
  let x = position[0];
  let y = position[1];

  //change for new moves
  let moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  let newPossiblePositions = [];

  //loop for all new moves
  for (let i = 0; i < 8; i++) {
    //new moves
    let new_x = x + moves[i][0];
    let new_y = y + moves[i][1];

    //condition for only possible new moves
    if (new_x >= 0 && new_x <= 7 && new_y >= 0 && new_y <= 7) {
      newPossiblePositions.push([new_x, new_y]);
    }
  }

  return newPossiblePositions;
}
