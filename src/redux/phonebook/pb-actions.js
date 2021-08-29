/* eslint-disable import/no-anonymous-default-export */
import { nanoid } from 'nanoid';
import types from 'redux/phonebook/pb-types';

const addContact = ({ name, number }) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
