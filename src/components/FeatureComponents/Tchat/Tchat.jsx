import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TchatReader from '../TchatReader/TchatReader';
import TchatSender from '../TchatSender/TchatSender';
import  './Tchat.css';
class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { nickname } = this.props;
    return (
      <div className="Tchat">
      Tchat nick -&gt;{this.props.nickname}
        <TchatReader nickname={nickname} />
        <TchatSender nickname={nickname} />
      </div>
    );
  }
}

Tchat.propTypes = {
  nickname: PropTypes.string,
};

export default Tchat;
