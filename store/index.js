import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import prospectReducer from './reducers/prospectReducer';

const rootReducer = combineReducers({
  prospects: prospectReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
