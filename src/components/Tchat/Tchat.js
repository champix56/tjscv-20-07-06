import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import TchatReader from '../TchatReader/TchatReader';
import TchatSender from '../TchatSender/TchatSender';

const Tchat = (props) => {

  let nick = props.nickname;
  return props.nickname.length > 0 ? 
    (<div className={styles.Tchat} data-testid="Tchat">
      {/* tchat nickname --&gt;{nick} */}
      <TchatReader nickname={props.nickname} />
      <TchatSender nickname={props.nickname} submitMessage={message=>{console.log(message)}} />
    </div>) 
    :(<div className={styles.error}><div className={styles.errorContent}>Un nick name est requis</div></div>);
}


Tchat.propTypes = {
  nickname: PropTypes.string
};

Tchat.defaultProps = {};

export default Tchat;
