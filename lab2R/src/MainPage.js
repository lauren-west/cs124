import './main.css'
import React, {useState} from "react";


// function EditList(props){
//     props.list.id
//     props.setShowEditAlert(true)
// }

function ListsDisplay(props) {
    return (
        <div onClick={() => props.onClick(props.list.id)} className="boxes" id="list-box-1">
            <img src="list-solid.svg"/>
            <span>{props.list.title}</span>
            <img className="edit-button" onClick={(e) => {
                props.setListId(props.list.id)
                e.stopPropagation()
                props.setShowEditAlert(true)
                // EditList()
            }} src={"edit-solid.svg"}/>
        </div>
    )
}

function MainPage(props) {
    return (
        <>
            <h1 id="MyLists">My Lists</h1>
            {props.data.map((x) => <ListsDisplay setListId={props.setListId} setShowEditAlert={props.setShowEditAlert} list={x} onClick={props.onListClick}/>)}
            <div id="button1">
                <button onClick={() => props.setShowAlert(true)} className="addList addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add List</span>
                </button>
            </div>
        </>
    )
}

export default MainPage;