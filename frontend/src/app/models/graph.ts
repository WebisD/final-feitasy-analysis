type nodeId = number;

export interface INode {
    id: nodeId;
    label: string;
};

export interface IEdge {
    start: nodeId;
    end: nodeId;
};

export interface IGameGraph {
    nodes: INode[];
    edges: IEdge[];
};