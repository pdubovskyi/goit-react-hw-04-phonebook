import PropTypes from 'prop-types';

import styles from '../ContactsBooks/contacs-books.module.css';

const ContactsFilter = ({ handleChange }) => {
  return (
    <div className={styles.formElements}>
      <label htmlFor="">Find contacts by name</label>
      <input
        onChange={handleChange}
        name="filter"
        placeholder="Filter Contacts"
      />
    </div>
  );
};

ContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ContactsFilter;
