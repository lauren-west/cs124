import logo from './logo.svg';
import './App.css';
import './AlertApp.css';
import React, {useEffect, useState, useMemo} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import DATA from "./InMemoryApp";
import Alert from './Alert';
import AlertEdit from './AlertEdit'

function App() {
    const [showAlert, setShowAlert] = useState(false);
    const [showEditAlert, setShowEditAlert] = useState(false);
    let [currentTask, setCurrentTask] = useState("");
    let [data, setData] = useState(DATA);
    let [listId, setListId] = useState(0);
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
                list.listItems = newListItems
            }
            return list;
        }))
    }

    function handleAlertOKListItem(listItemName) {
        updateListItems([...data[selectedPage.selectedId].listItems,
            {
                id: data[selectedPage.selectedId].listItems.length,
                text: listItemName,
                completed: false
            }
        ]);
    }

    function handleEditTask(listItemName){
        setData(data.map(list => {
            if (selectedPage.selectedId === list.id) {
                list.listItems[currentTask].text = listItemName
            }
            return list;
        }))
    }

    function handleEditList(listName){
        console.log(listId)
        setData(data.map(list => {
            if ( listId === list.id) {
                list.title = listName
            }
            return list;
        }))
    }


    function toggleModal() {
        setShowAlert(false);
        setShowEditAlert(false);
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

    function handleDelete() {
        if(selectedPage.type === 'home') {
            setData(data
                .filter((list) => list.id !== listId)
                .map((x,i) => {
                    x.id = i
                    return x
                }))

        }
        else {
            console.log(currentTask)
            console.log(data[listId].listItems)
            setData(data[listId].listItems
                .filter((listItem) => listItem[currentTask] !== listItem.id))
            console.log(data)

            return data;
         }
        return data;
    }

    function renderEditAlert(showEditAlert, cancelEdit, acceptEdit, handleOk){
        if (!showEditAlert){
            return null
        }
        if(selectedPage.type === 'home'){
            return (
                <AlertEdit inputName={""} data={data} onClose={toggleModal} onOk={handleOk} cancelName={cancelEdit}
                           currentTask={currentTask} selectedId={selectedPage.selectedId} okName={acceptEdit} onDelete={handleDelete}>
                    <div>{acceptEdit}:</div>
                </AlertEdit>
            )
        }
        else {
            return (
                <AlertEdit inputName={""} data={data} onClose={toggleModal} onOk={handleOk} cancelName={cancelEdit}
                           currentTask={currentTask} selectedId={selectedPage.selectedId} okName={acceptEdit} onDelete={handleDelete}>
                    <div>{acceptEdit}:</div>
                </AlertEdit>
            )
        }
    }

    const pageRenderLookup = {
        "home": (
            <>
                <MainPage setListId={setListId} setShowEditAlert={setShowEditAlert} setShowAlert={setShowAlert} setData={setData} data={data} onListClick={(n) => setPage({
                    type: "list",
                    selectedId: n
                })}/>
                {renderAlert(showAlert, "Don't Add List", "Add List", handleAlertOK)}
                {renderEditAlert(showEditAlert,"Don't Edit List", "Edit List", handleEditList)}

            </>
        ),
        "list": (
            <>
                <img onClick={() => setPage({type: "home"})} src={"long-arrow-alt-left-solid.svg"} className={"back-arrow"}/>
                <Lists setCurrentTask={setCurrentTask} handleDelete={updateListItems} setShowEditAlert={setShowEditAlert} setShowAlert={setShowAlert} setData={setData} data={data} selectedId={selectedPage.selectedId}/>
                {renderAlert(showAlert, "Don't Add Task", "Add Task", handleAlertOKListItem)}
                {renderEditAlert(showEditAlert,"Don't Edit Task", "Edit Task", handleEditTask)}
            </>
        )
    }
    return pageRenderLookup[selectedPage.type]
}

export default App;
