import store from "..";

/* App Actions */
import GraphReducer from "../slices/graph";

/* Models */
import { IEdge, INode } from "../../models/graph";

/* Selectors */
import { nodesSelector, edgesSelector } from "../selectors/graph";

export const setNodes = (nodes: INode[]) => store.dispatch(GraphReducer.actions.setNodes(nodes));

export const setEdges = (edges: IEdge[]) => store.dispatch(GraphReducer.actions.setEdges(edges));

export const setDataTableVisible = (isVisible: boolean) => 
    store.dispatch(GraphReducer.actions.setInfoTableVisible(isVisible));

export const setSelectedNode = (nodeId: number) => {
    const nodes = nodesSelector(store.getState());

    const selectedNode = nodes.find(n => n.id === nodeId);

    store.dispatch(GraphReducer.actions.setActiveEntity(selectedNode!));
};

export const setSelectedEdge = (edgeId: number) => {
    const edges = edgesSelector(store.getState());

    const selectedEdge = edges.find(n => n.id === edgeId);

    store.dispatch(GraphReducer.actions.setActiveEntity(selectedEdge!));
}
