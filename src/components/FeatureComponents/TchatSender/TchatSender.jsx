import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UIComponents/Button/Button';
import  './TchatSender.css';
const TchatSender = props => (
  <div className="TchatSender">
    <form>
      <input type="text" name="messageOutbox" placeholder="saisissez votre message" />
      <Button >Env<img src="/img/logo.svg" alt=""/>yer</Button>
    </form>
  </div>
);

TchatSender.propTypes = {
  nickname: PropTypes.string,
};

export default TchatSender;
