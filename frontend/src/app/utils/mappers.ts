/* Models */
import { IEdge, INode } from "../models/graph";
import { IEdgeResult, INodeResult } from "../models/queryResult";

export const mapNodesResultToVis = (nodes: INodeResult[]): INode[] => {
    return nodes.map(node => {

        const id = node.identity.low;
        const mappedProperties = mapNodePropertiesFields(node);

        return {
            id,
            label: `${node.labels[0]} ${mappedProperties['id_pk']}`,
            ...mappedProperties
        };
    });
};

export const mapEdgeResultToVis = (edge: IEdgeResult): IEdge => ({
    id: edge.identity.low,
    label: edge.type,
    from: edge.start.low,
    to: edge.end.low
});

const mapNodePropertiesFields = (node: INodeResult) => {

    const mappedProperties: any = {};
    
    Object.entries(node.properties).forEach(p => {

        let [key, value] = p;
        let mappedValue: number | string;

        mappedValue = typeof value !== 'string' ? value.low : value;
        
        mappedProperties[key] = mappedValue;
    
    });

    return mappedProperties;
};
