import logo from './logo.svg';
import './App.css';
import './AlertApp.css';
import React, {useState} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import DATA from "./InMemoryApp";

function App() {
    const [showAlert, setShowAlert] = useState(false);
    let [data, setData] = useState(DATA);
    let [selectedPage, setPage] = useState({
        type: "home"
    })

    const pageRenderLookup = {
        "home": (
            <>
                <MainPage setData={setData} data={data} onListClick={(n) => setPage({
                    type: "list",
                    selectedId: n
                })}/>
            </>
        ),
        "list": (
            <>
                <img onClick={() => setPage({type: "home"})} src={"long-arrow-alt-left-solid.svg"} className={"back-arrow"}/>
                <Lists setData={setData} data={data} list={data[selectedPage.selectedId]}/>
            </>
        )
    }
    return pageRenderLookup[selectedPage.type]
}

export default App;
