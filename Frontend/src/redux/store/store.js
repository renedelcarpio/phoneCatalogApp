import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import phonesReducer from '../reducers/phonesReducer';

const reducers = combineReducers({
	phones: phonesReducer,
});

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
