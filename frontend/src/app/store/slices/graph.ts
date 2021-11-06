import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* Models */
import { IEdge, INode } from '../../models/graph'

export interface IGraphState{
    nodes: INode[];
    edges: IEdge[];
    activeEntity: INode | IEdge | undefined;
    showInfoTable: boolean;
    isPlaying: boolean;
};

const initialState: IGraphState = {
    nodes: [],
    edges: [],
    activeEntity: undefined,
    showInfoTable: true,
    isPlaying: false
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
    setActiveEntity(state, action: PayloadAction<INode | IEdge>){
      state.activeEntity = action.payload;
    },
    setInfoTableVisible(state, action: PayloadAction<boolean>){
      state.showInfoTable = action.payload;
    },
    setIsPlaying(state, action: PayloadAction<boolean>){
      state.isPlaying = action.payload;
    }
  },
});

export type AppActions = typeof GraphReducer.actions;

export default GraphReducer;