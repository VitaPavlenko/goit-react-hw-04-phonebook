import PropTypes from "prop-types";

const ContactList = ({ contacts, filter, deletaClick }) => (
  <ul>
    {contacts.map(
      ({ id, name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) && (
          <li key={id}>
            {name}
            {number}
            <button onClick={() => deletaClick(id)}>Delete</button>
          </li>
        )
    )}
  </ul>
);

ContactList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};

export default ContactList;
