import "./main.css"
import {Data} from "./InMemoryApp"
import React, {useEffect, useState, useMemo} from "react";
import Alert from "./Alert";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, doc, setDoc, query, where, getDoc, getDocs} from "firebase/firestore";
import firebase from "firebase/compat";

function ShowEditAlert(props) {
    props.setCurrentTask(props.listitem.id)
    props.setShowEditAlert(true)
}

async function readASingleDocument(docname){
    const mySnapshot = await getDoc(docname);
    if (mySnapshot.exists()){
        const docData = mySnapshot.data();
        return docData;
    }
    return 0;
}


function ListsItemDisplay(props){
    console.log(props.currentTasks);
    const [checked, setChecked] = useState(props.completed); //useState(props.listitem.completed)
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOKListItem(listitem) {
        props.updateTask(props.list.id, props.id, listitem, props.completed)
        // props.listitem.text = listItemText;
        // props.setData(Object.assign([], props.data))
    }
    function handleDelete(e) {
        e.stopPropagation()
        props.deleteTask(props.list.id, props.id)
        // props.list.listItems = props.list.listItems.filter((item) => item.id !== props.id)
        // props.setData(Object.assign([], props.data))
    }

    return (
        <div id="box1" className="boxes boxes-blue">
            <input checked={checked} type="checkbox" onChange={() => {
                setChecked(!props.completed)
                props.updateTask(props.list.id, props.id, props.listitem, !props.completed)
                // props.setData(Object.assign([], props.data))
                console.log("add completed attribute")
            }}/>
            <label>{props.listitem}</label><br/>
            <div className={"edit-delete-button-container"}>
            <img className="edit-delete-button" onClick={() => setShowAlert(true)} src={"edit-solid.svg"}></img>
            <img className="edit-delete-button" onClick={(e) => handleDelete(e)} src={"times-solid.svg"}></img>
            </div>
            <Alert visible={showAlert} inputValue={props.listitem} onClose={() => setShowAlert(false)} onOk={handleAlertOKListItem} cancelName={"Don't Edit Task"} okName={"Edit Task"}>
                <div>Edit Task:</div>
            </Alert>
        </div>
    )
}

function Lists(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [currentTasks, setTasks] = useState([]);

    function updateListItems(newListItems) {
        props.setData(props.data.map(list => {
            if (list.id === props.list.id) {
                list.listItems = newListItems
            }
            return list;
        }))
    }

    if (!props.fetch) {
        props.getDocInfo(props.list.id).then((x) => setTasks(x));
        props.setFetch(true);
    }

    return (
        <>
            {console.log("hi")}
            <h1>{props.data[0].title}</h1>
            {currentTasks.filter((y) => !y[2]).map((x) => <ListsItemDisplay deleteTask={props.deleteTask} updateTask={props.updateTask} setTasks={setTasks} currentTasks={currentTasks} list={props.list} setData={props.setData} data={props.data} id={x[0]} listitem={x[1]} completed={x[2]}/>)}
            <hr/>
            <h3>Completed:</h3>
            {currentTasks.filter((y) => y[2]).map((x) => <ListsItemDisplay deleteTask={props.deleteTask} updateTask={props.updateTask} setTasks={setTasks} currentTasks={currentTasks} list={props.list} setData={props.setData} data={props.data} id={x[0]} listitem={x[1]} completed={x[2]}/>)}
            <div id="button1">
                <button onClick={() => {setShowAlert(true)}} className="addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add Task</span>
                </button>
            </div>
            <Alert visible={showAlert}  onClose={() => setShowAlert(false)} onOk={(input) => props.addListItem(props.list, input) } cancelName={"Don't Add Task"} okName={"Add Task"}>
                <div>Add Task:</div>
            </Alert>
        </>
    )
}

export default Lists;