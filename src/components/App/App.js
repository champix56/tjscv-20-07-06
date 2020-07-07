import React from 'react';
import './App.css';
import Button from '../UIComponents/Button/Button';
import NicknameForm from '../FeatureComponents/NicknameForm/NicknameForm';
import Tchat from '../Tchat/Tchat';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nickname: "" };
  }
  buttonClick(evt) {console.log(evt)}
  render() {
    return (
      <div className="App">
        <NicknameForm nick={this.state.nickname} validateNick={obj=>{this.setState({nickname:obj.newNick})}}/>
      {/* Bonjour --&gt;{this.state.nickname}&lt;-- */}
      <br/>
      <Tchat nickname={this.state.nickname}/>
        {/* <Button onClick={this.buttonClick} bgColor="tomato">
          <div>
            Env<img src="/img/logo.svg" alt="logo react" />yer
          </div>
        </Button> */}
      </div>
    );
  }
}

export default App;
