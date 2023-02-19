import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactList from 'components/ContactList/ContactList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import ContactsForm from 'components/ContactsForm/ContactsForm';
// import contacts from './contacts';
import styles from './contacs-books.module.css';

const ContactsBooks = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  const isDublicate = (name, newNumber) => {
    const normalizedName = name.toLowerCase();
    const dublicatedContacts = contacts.find(({ name, number }) => {
      return name.toLowerCase() === normalizedName && number === newNumber;
    });
    return Boolean(dublicatedContacts);
  };

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [newContact, ...prevContacts];
    });
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilter = ({ target }) => {
    console.log(target.value);
    setFilter(target.value);
  };

  const getContact = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) || number.includes(filter)
      );
    });
    return result;
  };

  const filteredContacts = getContact();
  const isContact = Boolean(filteredContacts.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h4>Phonebook</h4>
        <ContactsForm onSubmit={addContact} />
      </div>
      <div className={styles.block}>
        <ContactsFilter handleChange={handleFilter} />
        {isContact && (
          <ContactList
            removeContact={removeContact}
            contacts={filteredContacts}
          />
        )}
        {!isContact && <p>No contacts in list</p>}
      </div>
    </div>
  );
};

export default ContactsBooks;
