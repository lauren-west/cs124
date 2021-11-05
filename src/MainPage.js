import './main.css'
import React, {useState} from "react";
import Alert from "./Alert";

function ListsDisplay(props) {
    const [showAlert, setShowAlert] = useState(false);
    function handleAlertOK(listName) {

    }

    function handleEdit(inputVal) {
        props.updateList(props.list.id, inputVal)
    }

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
            <Alert edit={true} inputValue={props.list.title} visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleEdit} cancelName={"Don't Save"} okName={"Save"}>
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
            {props.data.map((x) => <ListsDisplay handleDelete={props.handleDelete} updateList={props.updateList} setData={props.setData} data={props.data} list={x} onClick={props.onListClick}/>)}
            <div id="button1">
                <button onClick={() => setShowAlert(true)} className="addList addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add List</span>
                </button>
            </div>
            <Alert edit={false} inputValue={""} visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleAlertOK} cancelName={"Don't Add"} okName={"Add"}>
                <div>Add List:</div>
            </Alert>
        </>
    )
}

export default MainPage;