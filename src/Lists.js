import "./main.css"
import React, {useEffect, useState, useMemo} from "react";
import Alert from "./Alert";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, doc, setDoc, where, getDoc, getDocs} from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import firebase from "firebase/compat";
import Wrapper from "./Wrapper";

function ShowEditAlert(props) {
    props.setCurrentTask(props.listitem.id)
    props.setShowEditAlert(true)
}

function ListsItemDisplay(props){
    console.log(props.currentTasks);
    const [checked, setChecked] = useState(props.completed); //useState(props.listitem.completed)
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOKListItem(listitem, priority) {
        props.updateTask(props.list.id, props.id, listitem, props.completed, priority)

    }
    function handleDelete(e) {
        e.stopPropagation()
        props.deleteTask(props.list.id, props.id)

    }

    function showPriorityImage(priority){
        if (priority == "high"){
            return (
                <div>
            <img className="priority-img" onClick={() => setShowAlert(true)} alt={"Exclatmation Point"} src={"exclamation-solid.svg"}></img>
            <img className="priority-img" onClick={() => setShowAlert(true)} alt={"Exclatmation Point"} src={"exclamation-solid.svg"}></img>
                </div>)
        } else if (priority == "medium"){
            return (
                <div>
                    <img className="priority-img" alt={"Exclatmation Point"} onClick={() => setShowAlert(true)} src={"exclamation-solid.svg"}></img>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }

    return (
        <div id="box1" className="boxes boxes-blue">
            <input onKeyUp={(event) => {
                (event.key === "Enter"||event.code === "Space") &&
                props.updateTask(props.list.id, props.id, props.listitem, !props.completed, props.priority)}} tabIndex="0" checked={props.completed} type="checkbox" onChange={() => {
                props.updateTask(props.list.id, props.id, props.listitem, !props.completed, props.priority) 
            }}/>
            <label>{props.listitem}</label><br/>

            <div className={"edit-delete-button-container"}>
                {showPriorityImage(props.priority)}
            <img tabIndex="0" className="edit-delete-button" alt={"Edit Pen"} onKeyPress={(event) => {event.preventDefault()
                {(event.key === "Enter"||event.code === "Space") && setShowAlert(true)}}} onClick={() => setShowAlert(true)} src={"edit-solid.svg"}></img>
            <img tabIndex="0" className="edit-delete-button" alt={"Delete X"} onKeyPress={(event) => {(event.key === "Enter"||event.code === "Space") && handleDelete(event)}} onClick={(e) => handleDelete(e)} src={"times-solid.svg"}></img>
            </div>
            <Alert edit={true} priority={props.priority} task={true} visible={showAlert} inputValue={props.listitem} onClose={() => setShowAlert(false)} onOk={handleAlertOKListItem} cancelName={"Don't Save"} okName={"Save"}>
                <div>Edit Task:</div>
            </Alert>
        </div>
    )
}

function Lists(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [currentTasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("title");
    const query = props.collectionRef;
    const [value, loading, error] = useCollection(props.collectionRef.doc(props.list.id).collection(props.list.id).orderBy(filter))
    const tasks = loading === false ? value.docs.map((element)=> element.data()) : []

    function deleteCompleted(tasks){
        tasks.filter((y) => y.completed).map((x) => props.deleteTask(props.list.id, x.id))
    }

    return (
        <Wrapper>
            <h1>{props.data[0].title}</h1>
            <div className={"filters"}>
            <label className={"filter-dropdown"} htmlFor="filters">Filters</label>
                <select name="filters" id="filter-select" onChange={(e) => setFilter(e.target.value)}>
                    <option value="title">Name</option>
                    <option value="created">Creation Date</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            {tasks.filter((y) => !y.completed).map((x) => <ListsItemDisplay deleteTask={props.deleteTask} updateTask={props.updateTask} setTasks={setTasks} currentTasks={currentTasks} list={props.list} setData={props.setData} data={props.data} id={x.id} listitem={x.title} completed={x.completed} priority={x.priority}/>)}
            <hr/>
            <h3 className={"completed"}>Completed:</h3>
            <button className={"completed-button"} onClick={() => deleteCompleted(tasks)}>Delete All Completed</button>
            {tasks.filter((y) => y.completed).map((x) => <ListsItemDisplay deleteTask={props.deleteTask} updateTask={props.updateTask} setTasks={setTasks} currentTasks={currentTasks} list={props.list} setData={props.setData} data={props.data} id={x.id} listitem={x.title} completed={x.completed} priority={x.priority}/>)}
            <div id="button1">
                <button onClick={() => {setShowAlert(true)}} className="addTask">
                    <img alt={"Add +"} src="plus-solid.svg"/>
                    <span>Add Task</span>
                </button>
            </div>
            <Alert edit={false} priority={props.priority} task={true} visible={showAlert}  onClose={() => setShowAlert(false)} listWithoutId={props.list} list={props.list.id} onOk={console.log("Oops")} onAddTaskOkay={props.addListItem} cancelName={"Don't Add"} okName={"Add"}>
                <div>Add Task:</div>
            </Alert>
        </Wrapper>
    )
}

export default Lists;
