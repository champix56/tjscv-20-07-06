import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatReader.module.scss';

export const TchatReaderMessage = (props) => {
  const isMine = props.message.from === props.nickname ? true : false;
  return (
    <div >
    <div className={styles.TchatReaderMessage} style={{textAlign: (isMine ? 'right' : 'left'), width:'100%' }}>
        <div className={isMine ? styles.TchatReaderMessageContainer : styles.TchatReaderMyMessageContainer}>
          {props.message.from}--&gt;{props.message.message}
        </div>
      </div>
    </div>
  );
}
TchatReaderMessage.propTypes = {
  message: PropTypes.object.isRequired,//impossible avec les proptype TS+++{from:'userNick',message:""}
  nickname: PropTypes.string.isRequired
}


const TchatReader = (props) => (
  <div className={styles.TchatReader} data-testid="TchatReader">
    <TchatReaderMessage message={{ from: "alex", message: "Hello" }} nickname={props.nickname} />
    <TchatReaderMessage message={{ from: "pierre", message: "Bonjour" }} nickname={props.nickname} />
    <TchatReaderMessage message={{ from: "Yannick", message: "demat" }} nickname={props.nickname} />
  </div>
);

TchatReader.propTypes = {
  nickname: PropTypes.string.isRequired
};

TchatReader.defaultProps = {};
export default TchatReader;
