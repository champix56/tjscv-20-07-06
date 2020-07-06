import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {

  function buttonClick(evt) {
    console.log(evt)
  }
  return (
    <div className="App">
        <Button text="Mon button" onClick={buttonClick}/>
        {/* <Button text="mon btn2"/> */}
    </div>
  );
}

export default App;
