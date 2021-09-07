import { combineReducers, createStore, compose } from 'redux';

/* Reducers */
import GraphReducer from './slices/graph';

const rootReducer = combineReducers({
    graph: GraphReducer.reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers()
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
