import { combineReducers } from 'redux';
import types from './pb-types';
import toast from 'react-hot-toast';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      const contactNames = state.map(item => {
        return item.name;
      });

      if (contactNames.includes(payload.name)) {
        toast.error(
          'Такое имя уже есть в списке контактов, придумайте новое имя.',
        );
        return state;
      } else {
        return [...state, payload];
      }

    case types.DELETE_CONTACT:
      const currentContacts = state.filter(item => item.id !== payload);
      return currentContacts;
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload.toLowerCase();
    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
