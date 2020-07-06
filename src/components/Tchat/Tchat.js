import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import TchatReader from '../TchatReader/TchatReader';
import TchatSender from '../TchatSender/TchatSender';

const Tchat = (props) => {
 return   (<div className={styles.Tchat} data-testid="Tchat">
      tchat nickname --&gt;{props.nickname}
      <TchatReader />
      <TchatSender />
    </div>);
}


Tchat.propTypes = {
  nickname: PropTypes.string
};

Tchat.defaultProps = {};

export default Tchat;
