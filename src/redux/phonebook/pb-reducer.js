import { combineReducers } from 'redux';
import toast from 'react-hot-toast';
import { createReducer } from '@reduxjs/toolkit';
import pbActions from 'redux/phonebook/pb-actions';

const addContact = (state, { payload }) => {
  const contactNames = state.map(item => {
    return item.name;
  });

  if (contactNames.includes(payload.name)) {
    toast.error('Такое имя уже есть в списке контактов, придумайте новое имя.');
    return state;
  } else {
    return [...state, payload];
  }
};

const contactsReducer = createReducer([], {
  [pbActions.addContact]: addContact,
  [pbActions.deleteContact]: (state, { payload }) => {
    const currentContacts = state.filter(item => item.id !== payload);
    return currentContacts;
  },
});

const filterReducer = createReducer('', {
  [pbActions.changeFilter]: (_, { payload }) => payload.toLowerCase(),
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
