import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatReader.module.scss';

const TchatReader = () => (
  <div className={styles.TchatReader} data-testid="TchatReader">
    TchatReader Component
  </div>
);

TchatReader.propTypes = {};

TchatReader.defaultProps = {};

export default TchatReader;
