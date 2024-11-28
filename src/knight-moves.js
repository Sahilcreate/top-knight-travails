import possibleMoves from "./moves-algo.js";

export default function knightMoves(start, end) {
  //invalid moves given at starting
  if (
    start[0] > 7 ||
    start[0] < 0 ||
    end[0] < 0 ||
    end[0] > 7 ||
    start[1] < 0 ||
    start[1] > 7 ||
    end[1] < 0 ||
    end[1] > 7
  ) {
    return null;
  }

  //keeps track of current position,
  //and the path covered
  const queue = [[...start, [[...start]]]];

  //because it's BFS, the first instance of
  //end node will result in our answer, thus
  //the visited nodes should not be repeated
  //as BFS guarantees that the first time a node
  //is visited, it is reached via the shortest
  //possible path
  const visited = [];
  visited.push(start);

  //queue for BFS
  while (queue.length > 0) {
    //popping current node and processing it
    const [x, y, path] = queue.shift();

    //node found condition
    if (x === end[0] && y === end[1]) {
      return path;
    }

    //possbile new node for current node
    const futureMoves = possibleMoves([x, y]);

    //for each possible node, we are checking if it's
    //visited before, and only proceeding if it isn't
    for (const [nx, ny] of futureMoves) {
      const newPosition = [nx, ny];
      if (!visited.includes(newPosition)) {
        visited.push(newPosition);
        queue.push([nx, ny, [...path, [nx, ny]]]);
      }
    }
  }

  //code shouldn't reach here.
  return "no path found";
}
