import React, { useEffect } from "react";
import { connect } from "react-redux";

/* Components */
import Graph from "react-graph-vis";

/* Interfaces | Types*/
import { IGraph } from "../../../models/graph";
import { AppState } from "../../../store";

/* Selectors | Actions */
import { graphSelector } from "../../../store/selectors/graph";

/* Query handler */
import applyQueryableLive from "../../../features/applyQueryableLive";

/* Styles */ 
import "./styles/styles.css";
import "./styles/network.css"; // need to import the vis network css in order to show tooltip

interface IProps {
  graph: IGraph;
};

const VizGraph: React.FC<IProps> = ({ graph }) => {

  useEffect(() => { applyQueryableLive() }, [])

  const options = {

    edges: {
      color: "#000000"
    },

  };

  return (
    <div id="data-visualizer">
      <Graph
        graph={ graph }
        options={ options }
      />
    </div>
  );

};

const mapStateToProps = (state: AppState) => ({
  graph: graphSelector(state)
});

export default connect(mapStateToProps)(VizGraph);