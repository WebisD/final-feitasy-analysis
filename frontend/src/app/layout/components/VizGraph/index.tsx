import React, { useEffect } from "react";
import { connect } from "react-redux";

/* Components */
import Graph from "react-graph-vis";

/* Interfaces | Types*/
import { IGraph } from "../../../models/graph";

/* Selectors | Actions */
import { graphSelector } from "../../../store/selectors/graph";
import { AppState } from "../../../store";
import { setSelectedNode, setSelectedEdge } from "../../../store/dispatches";

/* Query handler */
import applyTimedQuery from "../../../features/applyTimedQuery";

/* Styles */ 
import "./styles/styles.css";
import options from "./styles/options/graphOptions";

interface IProps {
  graph: IGraph;
  setSelectedNode: (nodeId: number) => void;
  setSelectedEdge: (edgeId: number) => void;
};

const VizGraph: React.FC<IProps> = ({ graph, setSelectedNode, setSelectedEdge }) => {

  useEffect(() => { applyTimedQuery() }, [])

  const events = {
    select: (event: any) => {
      const { nodes, edges } = event;
      
      const [hasSelectedNode, hasSelectedEdge] = [!!nodes[0], !!edges[0]];

      if (hasSelectedNode || hasSelectedEdge){
        if (hasSelectedEdge && !hasSelectedNode)
          setSelectedEdge(edges[0]);
        else
          setSelectedNode(nodes[0]);
      }
    }
  };

  return (
    <div id="data-visualizer">
      <Graph
        graph={ graph }
        options={ options }
        events={ events }
      />
    </div>
  );

};

const mapStateToProps = (state: AppState) => ({
  graph: graphSelector(state)
});


const mapDispatchToProps = () => ({
  setSelectedNode: (nodeId:number) => setSelectedNode(nodeId),
  setSelectedEdge: (edgeId:number) => setSelectedEdge(edgeId)
});

export default connect(mapStateToProps, mapDispatchToProps)(VizGraph);