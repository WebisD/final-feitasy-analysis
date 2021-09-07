
import React, { useCallback, useEffect, useState } from 'react';

/* Connection */
import { driver } from '../services/database/connection';

/* Models */
import { IEdgeResult, INodeResult } from '../models/queryResult';
import { mapEdgeResultToVis, mapNodesResultToVis } from '../../utils/mappers';
import { IEdge, IGraph, INode } from '../models/graph';

const useLiveQueryable = (
    query = "MATCH (n)-[r]->(m) RETURN n,r,m", 
    reRenderTime = 1000
): IGraph => {

    const [ edges, setEdges ] = useState<IEdge[]>([]);
    const [ nodes, setNodes ] = useState<INode[]>([]);

    useEffect(() => { setInterval(loadData, reRenderTime) }, []);

    const loadData = async () => {

        const session = driver.session();

        try {

            const res = await session.run(query);
            
            const mappedResult = 
                res.records.map(record => record.map(collection => collection)).map(entity => ({
                    node: entity[0],
                    relationship: entity[1],
                    neighbor_node: entity[2] 
                }));

            //console.log(mappedResult)

            mappedResult.forEach(r => {
            
                const node = r.node as INodeResult;
                const neighbor = r.neighbor_node as INodeResult;
                const edge = r.relationship as IEdgeResult;

                setNodes([...nodes, ...mapNodesResultToVis([node, neighbor])]);
                setEdges([...edges, mapEdgeResultToVis(edge)]);
                
            });

            console.log(nodes, edges)

        }
        catch(ex){
            console.log(ex);
        }
        finally{
            session.close();
        }
    
    };

    return { nodes, edges };
};

export default useLiveQueryable;