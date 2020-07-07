import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../UIComponents/Button/Button';
import './TchatSender.css';
import * as moment from 'moment';
const TchatSender = props => {
  let [messageOutbox, setMessage] = useState("");
  const submitMessage = (message) => {
    console.log(message);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch('http://localhost:4456/messages', {
      method:'POST',
      headers:myHeaders,
      body:JSON.stringify(message)
    }).then(e=>e.json).then(e=>{console.log(e);setMessage("")});
  }
  const actualTime=moment().format('YYYYMMDDHHmmss')
  return (
    <div className="TchatSender">
      <form onSubmit={e => {
        e.preventDefault();
        submitMessage({ userId: props.nickname, message: messageOutbox,heure:actualTime })
      }}>
        <input type="text" name="messageOutbox" value={messageOutbox} onChange={e => {
          setMessage(e.currentTarget.value)
        }} placeholder="saisissez votre message" />
        <Button onClick={e=>{submitMessage({userId:props.nickname,message:messageOutbox,heure:actualTime})}} >Env<img src="/img/logo.svg" alt="" />yer</Button>
      </form>
    </div>
  )
};

TchatSender.propTypes = {
  nickname: PropTypes.string,
};

export default TchatSender;
