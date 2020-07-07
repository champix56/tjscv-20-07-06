import React from 'react';
import PropTypes from 'prop-types';
// import  './TchatReader.css';
import './TchatReader.css'
const TchatReader = (props) => (
  <div className="TchatReader">
    <TchatMessage message={{ userId: "alex", message: "Demat breizh" }} nickname={props.nickname} />
    <TchatMessage message={{ userId: "jean-raoul", message: "hello Great brittain" }} nickname={props.nickname} />
  </div>
);

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
