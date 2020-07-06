import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatSender.module.scss';

const TchatSender = () => (
  <div className={styles.TchatSender} data-testid="TchatSender">
    TchatSender Component
  </div>
);

TchatSender.propTypes = {};

TchatSender.defaultProps = {};

export default TchatSender;
