import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';

const Tchat = () => (
  <div className={styles.Tchat} data-testid="Tchat">
    Tchat Component
  </div>
);

Tchat.propTypes = {};

Tchat.defaultProps = {};

export default Tchat;
