import React from 'react';
import { Neo4jProvider, createDriver } from 'use-neo4j';

export const driver = createDriver('neo4j', 'bolt://192.168.15.105:7687', 7687, 'neo4j', '123');

export const session = driver.session({ database: 'QAFinalFeitasy1' });

const DatabaseProvider: typeof Neo4jProvider = ({children}) => 

    <Neo4jProvider driver={driver}>

      { children }
    
    </Neo4jProvider>

export default DatabaseProvider;
