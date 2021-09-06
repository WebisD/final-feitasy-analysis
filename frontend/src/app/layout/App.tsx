import React from 'react';

/* Connection (neo4j) provider */
import DatabaseProvider from '../services/database/connection';

/* Components */
import Home from './pages/Home';

const App: React.FC = () =>

  <DatabaseProvider>

      <Home/>

  </DatabaseProvider>

export default App;
