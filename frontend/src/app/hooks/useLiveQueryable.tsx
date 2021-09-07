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
            
            res.records.forEach(r => {
                console.log(r);
            });
            
            setData(res);
        }
        catch(ex){
            console.log(ex);
        }
        finally{
            session.close();
            console.log("fim query")
        }
    
    };

    return data;
};

export default useLiveQueryable;