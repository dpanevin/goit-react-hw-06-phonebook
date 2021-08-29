import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import pbReducer from './phonebook/pb-reducer';

const store = createStore(pbReducer, composeWithDevTools());

export default store;
