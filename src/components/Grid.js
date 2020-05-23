import React from "react";
import Node from "./Node";
import { Bfs } from "../algorithms/BreadthFirstSearch";

function Grid() {
  const grid = [];
  const startNode = { row: 25, col: 25 };
  const endNode = { row: 30, col: 30 };

  for (let row = 0; row < 50; row++) {
    const curRow = [];
    for (let col = 0; col < 50; col++) {
      const currNode = {
        visited: false,
        col,
        row,
        isStart: row === startNode.row && col === startNode.col,
        isEnd: row === endNode.row && col === endNode.col,
      };
      curRow.push(currNode);
    }
    grid.push(curRow);
  }
  Bfs(grid, startNode, endNode);
  return (
    <div className="grid">
      {grid.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((node, nodeIdx) => (
            <Node key={nodeIdx} node={node} />
          ))}
        </div>
      ))}
    </div>
  );
}
export default Grid;
