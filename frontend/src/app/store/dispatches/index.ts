import GraphReducer from "../slices/graph";
import store from "..";
import { IEdge, INode } from "../../models/graph";

export const setNodes = (nodes: INode[]) => store.dispatch(GraphReducer.actions.setNodes(nodes));

export const setEdges = (edges: IEdge[]) => store.dispatch(GraphReducer.actions.setEdges(edges));