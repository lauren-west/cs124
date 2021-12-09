import './main.css'
import React, {useState} from "react";
import Alert from "./Alert";
import Wrapper from "./Wrapper";

function ListsDisplay(props) {
    const [showAlert, setShowAlert] = useState(false);
    // function handleAlertOK(listName) {
    //
    // }

    function handleEdit(inputVal) {
        props.updateList(props.list.id, inputVal)
    }

    return (
        <>
            <div tabIndex="0" onKeyPress={(event) => {(event.key === "Enter"||event.code === "Space") && props.onClick(props.list.id)}} onClick={() => props.onClick(props.list.id)} className="boxes" id="list-box-1">
                <img alt={"List Icon"} src="list-solid.svg"/>
                <span>{props.list.title}</span>
                <div className={"edit-delete-button-container"}>
                    {(props.list.sharedWith.length > 1) && <img tabIndex="0" alt={"Shared List"} src={"user-friends-solid.svg"}></img>}
                    <img tabIndex="0" className="edit-delete-button" onClick={(e) => {
                        e.stopPropagation()
                        setShowAlert(true)
                    }} onKeyPress={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        {(e.key === "Enter"||e.code === "Space") &&
                        setShowAlert(true)}
                    }} alt={"Edit Pen"} src={"edit-solid.svg"}/>
                    <img tabIndex="0" alt={"Delete X"} className="edit-delete-button" onKeyPress={(e) => {e.key === "Enter" && props.handleDelete(props.list.id, e)}} onClick={(e) => props.handleDelete(props.list.id, e)} src={"times-solid.svg"}></img>
                </div>

            </div>
            <Alert task={false} edit={true} inputValue={props.list.title} visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleEdit} cancelName={"Don't Save"} okName={"Save"}>
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
        <Wrapper>
            <h1 id="MyLists">My Lists</h1>
            {props.data && props.data.map((x) => <ListsDisplay handleDelete={props.handleDelete} updateList={props.updateList} setData={props.setData} data={props.data} list={x} onClick={props.onListClick}/>)}
            <div id="button1">
                <button onClick={() => setShowAlert(true)} className="addList addTask">
                    <img alt={"Add +"} src="plus-solid.svg"/>
                    <span>Add List</span>
                </button>
            </div>
            <Alert task={false} edit={false} inputValue={""} visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleAlertOK} cancelName={"Don't Add"} okName={"Add"}>
                <div>Add List:</div>
            </Alert>
        </Wrapper>
    )
}

export default MainPage;