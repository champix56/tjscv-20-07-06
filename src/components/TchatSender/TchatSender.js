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
    <>
    <div className={styles.TchatSender} data-testid="TchatSender">
      <form onSubmit={e => { e.preventDefault(); submit(e)}}>
        <input  placeholder="saisir message ici..." 
                type="text" value={messageOutbox} 
                onChange={e => { setMessage(e.currentTarget.value) }} />
        <Button onClick={e=>{submit(e);}} style={{position: 'absolute',right: 0}}>
          <div>
            Env<img src="/img/logo.svg" alt="logo react" />yer
          </div>
        </Button>
      </form>
    </div>
  <div style={{textAlign:'center', position:"fixed",bottom:"5px", left:0,right:0,fontSize:'20pt', fontStyle:'italic', borderTop:"1px solid rgba(135, 207, 235, 0.678)"}}>Be fair, be React</div>
  </>)
};

TchatSender.propTypes = { 
  nickname: PropTypes.string.isRequired, 
  submitMessage:PropTypes.func.isRequired 
};

TchatSender.defaultProps = {};

export default TchatSender;
