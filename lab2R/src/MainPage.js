import './main.css'
import React, {useState} from "react";
import Alert from "./Alert";

function ListsDisplay(props) {
    return (
        <>
            <div onClick={() => props.onClick(props.list.id)} className="boxes" id="list-box-1">
                <img src="list-solid.svg"/>
                <span>{props.list.title}</span>
                <img className="edit-button" onClick={(e) => {
                    e.stopPropagation()
                }} src={"edit-solid.svg"}/>
            </div>
        </>
    )
}

function MainPage(props) {
    const [showAlert, setShowAlert] = useState(false);

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
            <h1 id="MyLists">My Lists</h1>
            {props.data.map((x) => <ListsDisplay setData={props.setData} data={props.data} list={x} onClick={props.onListClick}/>)}
            <div id="button1">
                <button onClick={() => setShowAlert(true)} className="addList addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add List</span>
                </button>
            </div>
            <Alert visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleAlertOK} cancelName={"Don't Add List"} okName={"Add List"}>
                <div>Add List:</div>
            </Alert>
        </>
    )
}

export default MainPage;