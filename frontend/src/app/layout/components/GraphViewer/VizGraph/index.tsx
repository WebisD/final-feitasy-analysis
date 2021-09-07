import React, { useEffect } from "react";
import Graph from 'react-graph-vis';
import { connect } from "react-redux";
import applyQueryableLive from "../../../../features/applyQueryableLive";
import { IGraph } from "../../../../models/graph";
import { AppState } from "../../../../store";
import { graphSelector, useSelectorApp } from "../../../../store/selectors/graph";

// need to import the vis network css in order to show tooltip
import "./network.css";

interface IProps {
  graph: IGraph;
}

const VizGraph: React.FC<IProps> = ({ graph }) => {

  const options = {
    //layout: {
    // hierarchical: true
    //},
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  return (
    <Graph
      graph={{ nodes: [...graph.nodes], edges: [...graph.edges]  }}
      options={options}
    />
  );

}


const mapStateToProps = (state: AppState) => ({
  graph: graphSelector(state)
});

export default connect(mapStateToProps)(VizGraph);