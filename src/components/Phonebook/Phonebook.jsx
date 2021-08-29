import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import { HeadTitle, Section } from './Phonebook.styled';

export default function Phonebook() {
  // component did mount
  // useEffect(() => {
  //   const localContactsList = JSON.parse(localStorage.getItem('contactsList'));

  //   if (localContactsList) {
  //     setContacts(localContactsList);
  //   }
  // }, []);
  // //componentdidupdate
  // useEffect(() => {
  //   if (contacts) {
  //     localStorage.setItem('contactsList', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  return (
    <Section>
      <HeadTitle>Phonebook</HeadTitle>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <Toaster position="top-right" />
    </Section>
  );
}
