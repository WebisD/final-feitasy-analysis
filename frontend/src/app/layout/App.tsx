import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/* Connection (neo4j) provider */
import DatabaseProvider from '../services/database/connection';

/* Redux */
import store from '../store';

/* Components */
import MainPage from './pages/MainPage';

const App: React.FC = () =>
    <ReduxProvider store={store}>

      <DatabaseProvider>

        <MainPage />

      </DatabaseProvider>

    </ReduxProvider>

export default App;
