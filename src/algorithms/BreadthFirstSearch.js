// neighbours = []

// function addNeighbours(graph, root) {
//     root.visited = false;
//     neighbours.add(root)
//     while(neighbours.length != 0) {
//         s = neighbour.pop()
//         //change color of s

//         for
//     }
// }
var queue = [];
var check;
export function addNeighbours(graph, startNode) {
  // Check top
  setInterval(function () {
    if (startNode.row > 0 && startNode.row < 50) {
      if (graph[startNode.row - 1][startNode.col]["visited"] === false) {
        queue.push(graph[startNode.row - 1][startNode.col]);
        graph[startNode.row - 1][startNode.col]["visited"] = true;
      }
    }
  }, 200);

  // Check right
  setInterval(function () {
    if (startNode.col > 0 && startNode.col < 50) {
      if (graph[startNode.row][startNode.col + 1]["visited"] === false) {
        queue.push(graph[startNode.row][startNode.col + 1]);
        graph[startNode.row][startNode.col + 1]["visited"] = true;
      }
    }
  }, 200);
  // Check bottom
  setInterval(function () {
    if (startNode.row > 0 && startNode.row < 50) {
      if (graph[startNode.row + 1][startNode.col]["visited"] === false) {
        queue.push(graph[startNode.row + 1][startNode.col]);
        graph[startNode.row + 1][startNode.col]["visited"] = true;
      }
    }
  }, 200);
  // Check left
  setInterval(function () {
    if (startNode.col > 0 && startNode.col < 50) {
      if (graph[startNode.row][startNode.col - 1]["visited"] === false) {
        queue.push(graph[startNode.row][startNode.col - 1]);
        graph[startNode.row][startNode.col - 1]["visited"] = true;
      }
    }
  }, 200);
  console.log(graph[startNode.row][startNode.col]);
}

export function Bfs(graph, root, end) {
  queue.push(root);
  graph[root.row][root.col]["visited"] = true;
  while (queue.length > 0) {
    addNeighbours(graph, queue[0]);
    // change color of shit
    check = queue.shift();
    if (check.col === end.col && check.row === end.row) {
      console.log("found");
      return;
    }
  }
}
