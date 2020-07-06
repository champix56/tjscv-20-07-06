import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TchatSender.module.scss';
import Button from '../UIComponents/Button/Button';

const TchatSender = (props) => {
  const [messageOutbox, setMessage] = useState("");
  const submit=(e)=>{
    const leMessage={message:{from:props.nickname,message:messageOutbox}};
    props.submitMessage(leMessage);
    setMessage("");
  }
  return (
    <div className={styles.TchatSender} data-testid="TchatSender">
      <form onSubmit={e => { e.preventDefault(); submit(e)}}>
        <input placeholder="saisir message ici..." type="text" value={messageOutbox} onChange={e => { setMessage(e.currentTarget.value) }} />
        <Button onClick={e=>{submit(e);}}>
          <div>
            Env<img src="/img/logo.svg" alt="logo react" />yer
          </div>
        </Button>
      </form>
    </div>
  )
};

TchatSender.propTypes = { 
  nickname: PropTypes.string.isRequired, 
  submitMessage:PropTypes.func.isRequired 
};

TchatSender.defaultProps = {};

export default TchatSender;
