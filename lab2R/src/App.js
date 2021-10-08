import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useMemo} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import data from "./InMemoryApp";



function App() {
  //responsible for everyhing
  // rendering desired information
    let [selectedList, setList] = useState(-1);
    if (selectedList >= 0){
        return <Lists data={data} selectedId={selectedList}/>
    } else {
        return <MainPage data={data} onListClick={(n) => setList(n)}/>
    }
}

export default App;
