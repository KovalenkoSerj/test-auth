import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/root.reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ collapsed: true });

export const store = createStore (
	rootReducer,
	applyMiddleware(thunk, loggerMiddleware)
)