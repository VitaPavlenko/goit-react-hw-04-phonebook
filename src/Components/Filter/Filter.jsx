import PropTypes from "prop-types";

const Filter = ({ filter, handleFilter }) => {
  return (
    <label>
      <p> Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilter}></input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default Filter;
