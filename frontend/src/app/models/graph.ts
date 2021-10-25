export interface INode {
    id: string | number;
    label: string;
    [key: string]: any;
};

export interface IEdge{
    id: number;
    from: number;
    to: number;
    label: string;
    [key: string]: any;
};

export interface IGraph{
    nodes: INode[];
    edges: IEdge[];
}