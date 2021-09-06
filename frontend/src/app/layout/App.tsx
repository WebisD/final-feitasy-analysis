import React from 'react';

// connection (neo4j) provider
import DatabaseProvider from '../services/database/connection';

// components
import Home from './pages/Home';

const App: React.FC = () =>

  <DatabaseProvider>

    <Home/>

  </DatabaseProvider>

export default App;
