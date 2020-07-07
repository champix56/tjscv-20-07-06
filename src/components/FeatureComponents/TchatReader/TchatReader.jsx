import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import  './TchatReader.css';
import './TchatReader.css'
const TchatReader = (props) => {
  let [messages,setMessages]=useState([{id:0, userId: "alex", message: "degemer mat breizh" },{id:1, userId: "jean-raoul", message: "hello Great brittain" }]);

  useEffect(() => {
   console.log(messages);
   setMessages([...messages,{id:2,userId:'yannick', message:'te reste t\'il du chouchen?'}])
  });

  // const messages=[{id:0, userId: "alex", message: "degemer mat breizh" },{id:1, userId: "jean-raoul", message: "hello Great brittain" }]
  return(
  <div className="TchatReader">
    {
      messages.map((e,i)=>{
        return  <TchatMessage message={e} nickname={props.nickname} key={`message-${i}`} />
      })
    }
  </div>
);}

TchatReader.propTypes = {
  nickname: PropTypes.string,
};

export const TchatMessage = (props) => {
  const isMine = props.nickname === props.message.userId;
  return (
    <div style={{ textAlign: (isMine ? 'right' : 'left') }}>
      {/* <div className={styles.TchatMessage + (isMine ? " " + styles.mine : "")} >Message</div> */}
      <div className={"TchatMessage"+(isMine ? " mine":"") } >
      {props.message.message}
      <div style={{color:'black',fontSize:'12pt',textAlign:'right',fontStyle:'italic'}}>émis par :{props.message.userId}</div>
      </div>
    </div>
  );
}

TchatMessage.propTypes = {
  message: PropTypes.object,
  nickname: PropTypes.string,

};

export default TchatReader;
