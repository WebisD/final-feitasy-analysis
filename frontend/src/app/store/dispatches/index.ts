import store from "..";

/* App Actions */
import GraphReducer from "../slices/graph";

/* Models */
import { IEdge, INode } from "../../models/graph";

/* Selectors */
import { nodesSelector } from "../selectors/graph";

export const setNodes = (nodes: INode[]) => store.dispatch(GraphReducer.actions.setNodes(nodes));

export const setEdges = (edges: IEdge[]) => store.dispatch(GraphReducer.actions.setEdges(edges));

export const setSelectedNode = (nodeId: number) => {

    const state = store.getState();

    const nodes = nodesSelector(state);

    const selectedNode = nodes.find(n => n.id === nodeId);

    store.dispatch(GraphReducer.actions.setActiveNode(selectedNode!));

};
