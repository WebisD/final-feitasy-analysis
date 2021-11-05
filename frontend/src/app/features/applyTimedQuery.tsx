import _ from 'lodash';

/* Connection */
import { driver } from '../services/database/connection';

/* Models */
import { IEdge, INode } from '../models/graph';
import { IEdgeResult, INodeResult } from '../models/queryResult';

/* Redux */
import { setEdges, setNodes } from '../store/dispatches';

/* Utils */
import { mapEdgeResultToVis, mapNodesResultToVis } from '../utils/mappers';

/* Game */
import { player } from '../layout/pages/Game/features';


const applyTimedQuery = (
    reRenderTime = 1000,
) => {

    const loadData = async (query = `
        ${!!player?.id 
            ? `match (c:Character)-[r]->(n) where c.game_id='${player.id}'return c, r, n` 
            : "MATCH (n)-[r]->(m) RETURN n,r,m"
        }
    `) => {
        
        const session = driver.session(); 
        
        try {
                
            const res = await session.run(query);

            const mappedResult = 
                res.records.map(record => record.map(collection => collection)).map(entity => ({
                    node: entity[0],
                    relationship: entity[1],
                    neighbor_node: entity[2] 
                }));

            const nodesArr: INode[] = [];
            const edgesArr: IEdge[] = [];
            
            mappedResult.forEach(r => {
                
                const node = r.node as INodeResult;
                const neighbor = r.neighbor_node as INodeResult;
                const edge = r.relationship as IEdgeResult;
                
                nodesArr.push(...mapNodesResultToVis([node, neighbor]));
                edgesArr.push(mapEdgeResultToVis(edge));
                
            });
            
            const mappedEdges = _.uniqBy(edgesArr, 'id');
            const mappedNodes = _.uniqBy(nodesArr, 'id');

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

export default applyTimedQuery;