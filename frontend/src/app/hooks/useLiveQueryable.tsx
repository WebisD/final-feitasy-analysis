import React, { useEffect, useState } from 'react';
import { driver } from '../services/database/connection';

const useLiveQueryable = (
    query: string = "MATCH (n) return n", 
    reRenderTime: number = 1000) => {

        const [ data, setData ] = useState({});

        useEffect(() => { setInterval(loadData, reRenderTime) }, []);

        const loadData = async () => {

            const session = driver.session({ database: 'QAFinalFeitasy1' });

            try {
                const res = await session.run(query);

                //session.close();

                let result = res.records.forEach(r => {
                    console.log(result);
                });

                setData(res);
            }
            catch(ex){
                console.log(ex);
            }
        
        };


        return data;
}

export default useLiveQueryable;