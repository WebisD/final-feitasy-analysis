import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* Models */
import { IEdge, INode } from '../../models/graph'

export interface IGraphState{
    nodes: INode[];
    edges: IEdge[];
    activeNode: INode | undefined;
    showInfoTable: boolean;
};

const initialState: IGraphState = {
    nodes: [],
    edges: [],
    activeNode: undefined,
    showInfoTable: true
};

const GraphReducer = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    setNodes(state, action: PayloadAction<INode[]>){
      state.nodes = action.payload;
    },
    setEdges(state, action: PayloadAction<IEdge[]>){
      state.edges = action.payload;
    },
    setActiveNode(state, action: PayloadAction<INode>){
      state.activeNode = action.payload;
    },
    setInfoTableVisible(state, action: PayloadAction<boolean>){
      state.showInfoTable = action.payload;
    }
  },
});

export type AppActions = typeof GraphReducer.actions;

export default GraphReducer;