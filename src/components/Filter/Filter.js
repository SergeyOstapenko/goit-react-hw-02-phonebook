import styles from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
export const Filter = ({ filter, handlerFilter }) => {
  return (
    <label className={styles.label}>
      Find contact by name
      <input
        type="text"
        name="name"
        onChange={handlerFilter}
        value={filter}
        className="input"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};