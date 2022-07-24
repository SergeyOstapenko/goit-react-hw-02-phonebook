import PropTypes from 'prop-types';
import styles from '../Container/Container.module.css';
export const Container = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};