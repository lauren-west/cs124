import logo from './logo.svg';
import './App.css';
import './AlertApp.css';
import React, {useEffect, useState, useMemo} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import DATA from "./InMemoryApp";
import Alert from './Alert';

function App() {
    const [showAlert, setShowAlert] = useState(false);
    let [data, setData] = useState(DATA);
    let [selectedPage, setPage] = useState({
        type: "home"
    })

    function handleAlertOK(listName) {
        setData([...data, {
                id: data.length,
                title: listName,
                listItems: []
                }
            ]
        )
    }

    function updateListItems(newListItems){
        setData(data.map(list => {
            if (selectedPage.selectedId === list.id) {
                list.listItems = newListItems;
            }
            return list;
        }))
    }

    function handleAlertOKListItem(listItemName) {
        updateListItems([...data[selectedPage.selectedId].listItems, listItemName]);
    }

    function toggleModal() {
        setShowAlert(false);
    }

    function renderAlert(showAlert, cancelName, okName, handleOk){
        if (!showAlert){
            return null
        }
        return (
            <Alert onClose={toggleModal} onOk={handleOk} cancelName={cancelName} okName={okName}>
                <div>{okName}:</div>
            </Alert>
        )
    }

    const pageRenderLookup = {
        "home": (
            <>
                <MainPage setShowAlert={setShowAlert} setData={setData} data={data} onListClick={(n) => setPage({
                    type: "list",
                    selectedId: n
                })}/>
                {renderAlert(showAlert, "Don't Add List", "Add List", handleAlertOK)}
            </>
        ),
        "list": (
            <>
                <img onClick={() => setPage({type: "home"})} src={"long-arrow-alt-left-solid.svg"}/>
                <Lists handleDelete={updateListItems} setShowAlert={setShowAlert} data={data} selectedId={selectedPage.selectedId}/>
                {renderAlert(showAlert, "Don't Add Task", "Add Task", handleAlertOKListItem)}
            </>
        )
    }
    return pageRenderLookup[selectedPage.type]
}

export default App;
