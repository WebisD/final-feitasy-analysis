import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEdge, INode } from '../../models/graph'

export interface IGraphState{
    nodes: INode[];
    edges: IEdge[];
};

const initialState: IGraphState = {
    nodes: [],
    edges: []
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
    }
  },
});

export default GraphReducer;