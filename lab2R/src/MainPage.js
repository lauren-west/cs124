import './main.css'
import React, {useState} from "react";
import Alert from "./Alert";

function ListsDisplay(props) {

    function renderAlert(showAlert, cancelName, okName, handleOk){
        if (!props.showAlert){
            return null
        }
        return (
            <Alert onClose={() => props.setShowAlert(false)} onOk={handleOk} cancelName={cancelName} okName={okName}>
                <div>{okName}:</div>
            </Alert>
        )
    }

    function handleAlertOK(listName) {
        props.setData([...props.data, {
                id: props.data.length,
                title: listName,
                listItems: []
            }
            ]
        )
    }

    return (
        <>
            {renderAlert(props.showAlert, "Don't Add List", "Add List", handleAlertOK)}
            <div onClick={() => props.onClick(props.list.id)} className="boxes" id="list-box-1">
                <img src="list-solid.svg"/>
                <span>{props.list.title}</span>
                <img className="edit-button" onClick={(e) => {
                    e.stopPropagation()
                    props.setShowAlert(true)
                }} src={"edit-solid.svg"}/>
            </div>
        </>
    )
}

function MainPage(props) {
    const [showAlert, setShowAlert] = useState(false);
    return (
        <>
            <h1 id="MyLists">My Lists</h1>
            {props.data.map((x) => <ListsDisplay showAlert={showAlert} setShowAlert={setShowAlert} setData={props.setData} data={props.data} list={x} onClick={props.onListClick}/>)}
            <div id="button1">
                <button onClick={() => setShowAlert(true)} className="addList addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add List</span>
                </button>
            </div>
        </>
    )
}

export default MainPage;