import { Neo4jProvider, createDriver } from 'use-neo4j';
import { NEO4J_HOST, NEO4J_PASSWORD, NEO4J_PORT, NEO4J_USER } from '../../utils/requests';

export const driver = createDriver(
  'neo4j+s', 
  NEO4J_HOST, 
  NEO4J_PORT, 
  NEO4J_USER, 
  NEO4J_PASSWORD
);

const DatabaseProvider: typeof Neo4jProvider = ({children}) => 

    <Neo4jProvider driver={driver}>

      { children }
    
    </Neo4jProvider>

export default DatabaseProvider;
