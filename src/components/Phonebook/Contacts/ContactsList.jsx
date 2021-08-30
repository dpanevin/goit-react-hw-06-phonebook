import { useDispatch, useSelector } from 'react-redux';
import pbActions from 'redux/phonebook/pb-actions';
import { selectFilteredContacts } from 'redux/phonebook/pb-selectors';
import { ContactsListItem, DeleteBtn } from '../Phonebook.styled';

export default function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  function onClicked(e) {
    dispatch(pbActions.deleteContact(e.target.id));
  }

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactsListItem key={id}>
            {name}: {number}
            <DeleteBtn id={id} onClick={onClicked}>
              Удалить
            </DeleteBtn>
          </ContactsListItem>
        );
      })}
    </ul>
  );
}
