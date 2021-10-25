export type integer = { low: number, high: number };

export interface INodeResult {
    identity: integer;
    labels: [string];
    properties: {
        [key: string] : integer | string
    };
};

export interface IEdgeResult {
    identity: integer;
    type: string;
    start: integer;
    end: integer;
    properties: {
        [key: string] : integer | string
    };
};