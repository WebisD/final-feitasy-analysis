import React, { useEffect, useState } from 'react';
import { driver } from '../services/database/connection';

const useLiveQueryable = (
    query = "MATCH (n)-[r]->(m) RETURN n,r,m", 
    reRenderTime = 1000
) => {

    const [ data, setData ] = useState({});

    useEffect(() => { setInterval(loadData, reRenderTime) }, []);

    const loadData = async () => {

        const session = driver.session();

        try {

            const res = await session.run(query);
            
            const mappedResult = 
                res.records.map(record => record.map(collection => collection)).map(entity => ({
                    node: entity[0],
                    edge: entity[1],
                    node_neighbor: entity[2] 
                }));

            console.log(mappedResult)

            setData(res);
        }
        catch(ex){
            console.log(ex);
        }
        finally{
            session.close();
        }
    
    };

    return data;
};

export default useLiveQueryable;