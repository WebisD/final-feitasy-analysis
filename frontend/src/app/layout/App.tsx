import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

/* Connection (neo4j) provider */
import DatabaseProvider from '../services/database/connection';

/* Redux */
import store from '../store';

/* Components */
import Home from './pages/Home';

const App: React.FC = () =>

  <ReduxProvider store={store}>

    <DatabaseProvider>

      <Home/>

    </DatabaseProvider>

  </ReduxProvider>



export default App;
