import { Neo4jProvider, createDriver } from 'use-neo4j';
import { Credentials } from './credentials';

export const driver = createDriver(
  Credentials.scheme, 
  Credentials.host, 
  Credentials.port, 
  Credentials.user, 
  Credentials.password
);

export const session = driver.session();

const DatabaseProvider: typeof Neo4jProvider = ({children}) => 

    <Neo4jProvider driver={driver}>

      { children }
    
    </Neo4jProvider>

export default DatabaseProvider;
