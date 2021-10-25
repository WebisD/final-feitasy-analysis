/* Models */
import { IEdge, INode } from "../models/graph";
import { IEdgeResult, INodeResult } from "../models/queryResult";

export const mapNodesResultToVis = (nodes: INodeResult[]): INode[] => {
    return nodes.map(node => {
        const mappedProperties = mapEntityPropertiesFields(node);
        mappedProperties["entity"] = node.labels[0];

        return {
            id: node.identity.low,
            label: mappedProperties.caption,
            ...mappedProperties
        };
    });
};

export const mapEdgeResultToVis = (edge: IEdgeResult): IEdge => ({
    id: edge.identity.low,
    label: edge.type,
    from: edge.start.low,
    to: edge.end.low,
    ...mapEntityPropertiesFields(edge)
});

const mapEntityPropertiesFields = (entity: INodeResult | IEdgeResult) => {

    const mappedProperties: any = {};

    Object.entries(entity.properties).forEach(p => {

        let [key, value] = p;
        let mappedValue: number | string;

        mappedValue = typeof value !== 'string' ? value.low : value;
        
        mappedProperties[key] = mappedValue;
    
    });

    return mappedProperties;
};
