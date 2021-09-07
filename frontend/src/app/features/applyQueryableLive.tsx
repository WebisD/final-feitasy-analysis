
import React, { useCallback, useEffect, useState } from 'react';

/* Connection */
import { driver } from '../services/database/connection';

/* Models */
import { IEdgeResult, INodeResult } from '../models/queryResult';
import { mapEdgeResultToVis, mapNodesResultToVis } from '../../utils/mappers';
import { IEdge, INode } from '../models/graph';
import { setEdges, setNodes } from '../store/dispatches';
import _ from 'lodash';


const applyQueryableLive = (
    query = "MATCH (n)-[r]->(m) RETURN n,r,m", 
    reRenderTime = 1000
) => {

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
            
            const nodesArr: INode[] = [];
            const edgesArr: IEdge[] = [];
            
            mappedResult.forEach(r => {
                
                const node = r.node as INodeResult;
                const neighbor = r.neighbor_node as INodeResult;
                const edge = r.relationship as IEdgeResult;
                
                nodesArr.push(...mapNodesResultToVis([node, neighbor]));
                edgesArr.push(mapEdgeResultToVis(edge));
                
            });
            
            const mappedEdges = _.uniqBy([...edgesArr], 'id');
            const mappedNodes = _.uniqBy([...nodesArr], 'id');


            setEdges(mappedEdges);
            setNodes(mappedNodes);
            
        }
        catch(ex){
            console.log(ex);
        }
        finally{
            session.close();
        }

    };

    setInterval(loadData, reRenderTime);

};

export default applyQueryableLive;