Given `start` and `end`, the function will find the shortest path possible. But how?

Lets say we have a position, `[a, b]`.
Theoritically it can have 8 other positions linked to it.

Those are:

```
   [a-1, b-2], [a-1, b+2]
   [a+1, b-2], [a+1, b+2]
   [a-2, b-1], [a-2, b+1]
   [a+2, b-1], [a+2, b+1]
```

with constraints being
`{[a', b']| 0 <= a' & b' <= 7}`

As it's said that we don't need to explicitly create a graph object with vertices and edges.
Instead, think of graph as implicit. The knight starts on a spicific vertex `[a, b]`, and the algorithm will dynamically explore all possible moves (edges) to other vertices (position) as it traversed the board.

**Choice of Data Structure**

1. Array
2. Linked List
3. Hash Map (?)
4. Binary Tree
5. Array with Linked List
6. Queue

**Choice of Search Algorithm** (??)

1. BFS
2. DFS

**Idea 1**
Given the array of possible moves, we are going to use a `for` loop to loop through the possible moves.<be>
For each move, we are again going to find possible moves and again use a `for` loop to find possible moves until we find our output, from where we are going to trace back the path.
For the initial possible moves array, we are going to replace each move with shortest path possible from that move and at last we list get less than or equal 8 paths from which we are going to choose the shortest.

> is this feasible?<br>
> doesn't feel like it. Wouldn't the branching be absurd.

Let's try the idea of a `tree`, where instead of 2 branches(`left` and `right`) it will have less or equal to 8 branches. If we dynamically build this tree in `Breadth-First-Search` then we will get our shortest path whenever out `end` shows up.

Why make link? We are doing it dynamically. We can use BSF using Queue alone while imagining a tree like structure.
