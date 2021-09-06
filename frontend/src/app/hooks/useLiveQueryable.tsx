import React, { useEffect, useState } from 'react';
import { session } from '../services/database/connection';

const useLiveQueryable = (
    query = "MATCH (n) return n", 
    reRenderTime = 1000
) => {

        const [ data, setData ] = useState({});

        useEffect(() => { setInterval(loadData, reRenderTime) }, []);

        const loadData = async () => {

            try {
                const res = await session.run(query);
                
                res.records.forEach(r => {
                    console.log(r);
                });
                
                setData(res);

                //session.close();
            }
            catch(ex){
                console.log(ex);
            }
        
        };

        return data;
};

export default useLiveQueryable;