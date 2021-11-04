import './main.css'
import React, {useState} from "react";
import Alert from "./Alert";

function ListsDisplay(props) {
    const [showAlert, setShowAlert] = useState(false);
    function handleAlertOK(listName) {
        props.list.title = listName;
        props.setData(Object.assign([], props.data))
    }
    // function handleDelete(e) {
    //     e.stopPropagation()
    //     props.setData(props.data.filter((list) => list.id !== props.list.id))
    //
    //
    // }

    return (
        <>
            <div onClick={() => props.onClick(props.list.id)} className="boxes" id="list-box-1">
                <img src="list-solid.svg"/>
                <span>{props.list.title}</span>
                <div className={"edit-delete-button-container"}>
                    <img className="edit-delete-button" onClick={(e) => {
                        e.stopPropagation()
                        setShowAlert(true)
                    }} src={"edit-solid.svg"}/>
                    <img className="edit-delete-button" onClick={(e) => props.handleDelete(props.list.id, e)} src={"times-solid.svg"}></img>
                {/*    (e) => props.handleDelete(e.target.id)*/}
                </div>

            </div>
            <Alert inputValue={props.list.title} visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleAlertOK} cancelName={"Don't Edit List"} okName={"Edit List"}>
                <div>Edit List:</div>
            </Alert>
        </>
    )
}

function MainPage(props) {
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOK(listName) {
        props.setData(listName)
    }

    return (
        <>
            <h1 id="MyLists">My Lists</h1>
            {props.data.map((x) => <ListsDisplay handleDelete={props.handleDelete} setData={props.setData} data={props.data} list={x} onClick={props.onListClick}/>)}
            <div id="button1">
                <button onClick={() => setShowAlert(true)} className="addList addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add List</span>
                </button>
            </div>
            <Alert inputValue={""} visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleAlertOK} cancelName={"Don't Add List"} okName={"Add List"}>
                <div>Add List:</div>
            </Alert>
        </>
    )
}

export default MainPage;