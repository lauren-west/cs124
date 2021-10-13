import "./main.css"
import {Data} from "./InMemoryApp"
import React, {useEffect, useState, useMemo} from "react";
import Alert from "./Alert";

function ListsItemDisplay(props){
    const [checked, setChecked] = useState(props.listitem.completed)
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOKListItem(listItemText) {
        console.log(listItemText)
        props.listitem.text = listItemText;
        props.setData(Object.assign([], props.data))
    }
    function handleDelete(e) {
        e.stopPropagation()
        props.list.listItems = props.list.listItems.filter((item) => item.id !== props.listitem.id)
        props.setData(Object.assign([], props.data))
    }

    return (
        <div id="box1" className="boxes boxes-blue">
            <input checked={checked} type="checkbox" onChange={() => {
                props.listitem.completed = !props.listitem.completed
                setChecked(props.listitem.completed)
                props.setData(Object.assign([], props.data))
            }}/>
            <label>{props.listitem.text}</label><br/>
            <img className="edit-delete-button" onClick={() => setShowAlert(true)} src={"edit-solid.svg"}></img>
            <img className="edit-delete-button" onClick={handleDelete} src={"times-solid.svg"}></img>
            <Alert visible={showAlert} inputValue={props.listitem.text} onClose={() => setShowAlert(false)} onOk={handleAlertOKListItem} cancelName={"Don't Edit Task"} okName={"Edit Task"}>
                <div>Edit Task:</div>
            </Alert>
        </div>
    )
}

function Lists(props)
{
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOKListItem(listItemName) {
        updateListItems([...props.list.listItems,
            {
                id: props.list.listItems.length,
                text: listItemName,
                completed: false
            }
        ]);
    }
    function updateListItems(newListItems){
        props.setData(props.data.map(list => {
            if (list.id === props.list.id) {
                list.listItems = newListItems
            }
            return list;
        }))
    }
    return (
        <>
            <h1>{props.list.title}</h1>
            {
                props.list.listItems
                    .filter((x) => !x.completed)
                    .map((y) => <ListsItemDisplay list={props.list} key={y.id} setData={props.setData} data={props.data} listitem={y}/>)}
            <hr/>
            <h3>Completed:</h3>
            {
            props.list.listItems
                .filter((x) => x.completed)
                .map((y) => <ListsItemDisplay list={props.list} key={y.id} setData={props.setData} data={props.data} listitem={y}/>)}
            <div id="button1">
                <button onClick={() => {setShowAlert(true)}} className="addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add Task</span>
                </button>
            </div>
            <Alert visible={showAlert}  onClose={() => setShowAlert(false)} onOk={handleAlertOKListItem} cancelName={"Don't Add Task"} okName={"Add Task"}>
                <div>Add Task:</div>
            </Alert>
        </>
    )
}

export default Lists;