import React from 'react';
import { Neo4jProvider } from 'use-neo4j';

const DatabaseProvider: typeof Neo4jProvider = ({children}) => 

    <Neo4jProvider 
          //scheme="neo4j+s"
          host="bolt://192.168.15.105:7687"
          port="7687"
          username="neo4j"
          password="123" 
          database="QAFinalFeitasy1"
    >
      { children }
    
    </Neo4jProvider>

export default DatabaseProvider;
