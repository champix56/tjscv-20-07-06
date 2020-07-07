import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import  './TchatReader.css';
import './TchatReader.css'
import * as moment from 'moment';
const TchatReader = (props) => {
  let [messages, setMessages] = useState([{ id: 0, userId: "alex", message: "degemer mat breizh" }, { id: 1, userId: "jean-raoul", message: "hello Great brittain" }]);
  let [lastReload, setLastReload] = useState(moment('2020-06-01').format('YYYYMMDDHHmmss'));

  useEffect(() => {
    console.log(messages);
    getRestMessages();
    setInterval(getRestMessages, 2000);
  }, []);
  const Moment = moment;
  const getRestMessages = () => {
    fetch('http://localhost:4456/messages?_sort=heure&_order=asc&_expand=user&heure_gte=' + lastReload).then(r => r.json()).then(r => {
      setMessages([...messages, ...r])
      let lastRevievedMessageDate = lastReload;
       r.find(e => {
        if (e.heure > lastRevievedMessageDate) { lastRevievedMessageDate = e.heure }
      });
      console.log(lastRevievedMessageDate);
      setLastReload(lastRevievedMessageDate)
    })
  }
  let formatedTime = moment(lastReload, 'YYYYMMDDHHmmss').format();
  return (
    <>
      last reload : {formatedTime}
      <div className="TchatReader">
        {
          messages.map((e, i) => {
            return <TchatMessage message={e} nickname={props.nickname} key={`message-${i}`} />
          })
        }
      </div>
    </>
  );
}

TchatReader.propTypes = {
  nickname: PropTypes.string,
};

export const TchatMessage = (props) => {
  const isMine = props.nickname === props.message.userId;
  return (
    <div style={{ textAlign: (isMine ? 'right' : 'left') }}>
      {/* <div className={styles.TchatMessage + (isMine ? " " + styles.mine : "")} >Message</div> */}
      <div className={"TchatMessage" + (isMine ? " mine" : "")} >
        {props.message.message}
        <div style={{ color: 'black', fontSize: '12pt', textAlign: 'right', fontStyle: 'italic' }}>émis par :{props.message.userId}</div>
      </div>
    </div>
  );
}

TchatMessage.propTypes = {
  message: PropTypes.object,
  nickname: PropTypes.string,

};

export default TchatReader;
