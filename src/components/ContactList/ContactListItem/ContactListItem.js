import styles from '../ContactListItem/ConcatListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, phone, onDelete, id }) => {
  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}</p>
      <p className={styles.tel}>{phone}</p>
      <button type="button" onClick={() => onDelete(id)} className="btn">
        Delete
      </button>
    </li>
  );
};
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};