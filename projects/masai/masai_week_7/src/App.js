import React from 'react';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Fotter from './component/Fotter/Fotter';
// import NewHeader from './component/Header/NewHeader';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Fotter />
      {/* <NewHeader /> */}
     
    </div>  
  )
}

export default App;