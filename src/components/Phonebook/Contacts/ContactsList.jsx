import { connect } from 'react-redux';
import pbActions from 'redux/phonebook/pb-actions';
import { ContactsListItem, DeleteBtn } from '../Phonebook.styled';

function ContactsList({ onDelete, contacts, filter }) {
  function onClicked(e) {
    onDelete(e.target.id);
  }

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter);
  });

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

const mapStateToProps = ({ contacts, filter }) => ({
  contacts,
  filter,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(pbActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
