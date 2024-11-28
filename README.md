# Project: Knights Travails

The task is to build a function `knightMoves` that shows the shortest possible way to get from one square to another by outputting all square the knight will stop along the way.

Think of board as having 2-dimensional coordiantes. The function would therefore look like:

- `knightMoves([0,0],[1,2]) == [[0,0],[1,2]]`

> Somethimes there is more than one fastest path. Any answer is correct as long as it follows the rules and gives the shortest possible path.<br>
> `knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]]` or `knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]`

- [x] 1. Think about the rules of the board and knight, and make sure to follow them.
- [x] 2. For every square there is a number of possible moves, choose a data structure that will allow you to work with them. Don't allow any moves to go off the board.
- [x] 4. Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
- [x] 5. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output may look like:

```
> knightMoves([3,3],[4,3])
=> You made it in 3 moves! Here's your path:
  [3,3]
  [4,5]
  [2,4]
  [4,3]
```
