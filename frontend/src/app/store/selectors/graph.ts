import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createSelector } from "reselect";

/* Models */
import { IGraph } from "../../models/graph";

/* Application state */
import { AppState } from "..";

export const nodesSelector = (state: AppState) => state.graph.nodes;

export const edgesSelector = (state: AppState) => state.graph.edges;

export const isDataTableVisibleSelector = (state: AppState) => state.graph.showInfoTable;

export const graphSelector = createSelector(
    [nodesSelector, edgesSelector],
    (nodes, edges): IGraph => {
        return { nodes, edges };
    }
);

export const activeNodeSelector = (state: AppState) => state.graph.activeNode;

export const useAppSelector : TypedUseSelectorHook<AppState> = useSelector;