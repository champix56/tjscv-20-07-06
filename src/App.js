import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {

  function buttonClick(evt) {
    console.log(evt)
  }
  return (
    <div className="App">
        {/* <Button onClick={buttonClick} bgColor="tomato">
         <div> 
            I <img src="/img/logo.svg" alt="logo react"/> React
          </div>
        </Button> */}

        
    </div>
  );
}

export default App;
