import React from "react";

/* Components */
import Graph from "react-graph-vis";


const VizGraph: React.FC = () => {

  const graph = {
    nodes: [
      { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ]
  };

  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  /*const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };*/

  return (
    <Graph
      graph={graph}
      options={options}
      /*events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}*/
    />
  );
}

export default VizGraph;