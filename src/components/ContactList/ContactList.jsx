import PropTypes from 'prop-types';

const ContactList = ({ removeContact, contacts }) => {
  const items = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}{' '}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul>{items}</ul>;
};

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
