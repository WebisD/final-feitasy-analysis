import React, { useEffect } from "react";
import { connect } from "react-redux";

/* Components */
import Graph from "react-graph-vis";

/* Interfaces | Types*/
import { IGraph } from "../../../models/graph";

/* Selectors | Actions */
import { graphSelector } from "../../../store/selectors/graph";
import { AppDispatch, AppState } from "../../../store";
import { setSelectedNode } from "../../../store/dispatches";

/* Query handler */
import applyQueryableLive from "../../../features/applyQueryableLive";

/* Styles */ 
import "./styles/styles.css";
import "./styles/network.css"; // need to import the vis network css in order to show tooltip

interface IProps {
  graph: IGraph;
  setSelectedNode: (nodeId: number) => void;
};

const VizGraph: React.FC<IProps> = ({ graph, setSelectedNode }) => {

  useEffect(() => { applyQueryableLive() }, [])

  const options = {

    edges: {
      color: "#000000"
    },

  };

  const events = {
    select: function(event: any) {
      const { nodes } = event;
      setSelectedNode(nodes[0]);
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


const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setSelectedNode: (nodeId:number) => setSelectedNode(nodeId)
});

export default connect(mapStateToProps, mapDispatchToProps)(VizGraph);