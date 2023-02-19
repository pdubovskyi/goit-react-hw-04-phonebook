import { useState } from 'react';

import initialState from './initialState';
import styles from '../ContactsBooks/contacs-books.module.css';

const ContactsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.formElements}>
        <label htmlFor="">Name</label>
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter your name"
        />
      </div>
      <div className={styles.formElements}>
        <label htmlFor="">Number</label>
        <input
          value={number}
          onChange={({ target }) => setNumber(target.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter a phone number"
          required
        />
      </div>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
