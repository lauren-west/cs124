import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useMemo} from "react";
import MainPage from './MainPage'

function App() {
  //responsible for everyhing
  // rendering desired information
  let [isMainPage, setPage] = useState(true);
  return (
      <div>
        <MainPage />
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
