/* eslint-disable import/no-anonymous-default-export */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pbReducer from './phonebook/pb-reducer';

const pbPersistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(pbPersistConfig, pbReducer);

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export default { store, persistor };
