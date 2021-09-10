import env from '../../configurations/env';
import { Neo4jScheme } from 'use-neo4j/dist/neo4j-config.interface';

const Credentials = {
    scheme: env.NEO4J_SCHEME! as Neo4jScheme,
    host: env.NEO4J_HOST!,
    port: `${env.NEO4J_PORT}`,
    user: env.NEO4J_USER!,
    password: env.NEO4J_PASSWORD!
};

export default Credentials;