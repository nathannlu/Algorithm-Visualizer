import React from "react";

function Node(props) {
  const startOrEnd = props.node.isStart
    ? "node-start"
    : props.node.isEnd
    ? "node-finish"
    : "";
  const isVisited = props.node.visited ? "node-visited" : "";

  return <div className={`node ${startOrEnd} ${isVisited}`}></div>;
}
export default Node;
