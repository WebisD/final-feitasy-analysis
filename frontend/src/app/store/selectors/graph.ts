import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createSelector } from "reselect";

/* Models */
import { IGraph } from "../../models/graph";

/* Application state */
import { AppState } from "..";

export const nodesSelector = (state: AppState) => state.graph.nodes;

export const edgesSelector = (state: AppState) => state.graph.edges;

export const graphSelector = createSelector(
    [nodesSelector, edgesSelector],
    (nodes, edges): IGraph => {
        return { nodes, edges };
    }
);

export const useSelectorApp : TypedUseSelectorHook<AppState> = useSelector;