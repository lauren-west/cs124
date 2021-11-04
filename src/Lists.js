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

    function handleAlertOKListItem(listItemText) {
        props.listitem.text = listItemText;
        props.setData(Object.assign([], props.data))
    }
    // function handleDelete(e) {
    //     e.stopPropagation()
    //     props.list.listItems = props.list.listItems.filter((item) => item.id !== props.id)
    //     props.setData(Object.assign([], props.data))
    // }

    return (
        <div id="box1" className="boxes boxes-blue">
            <input checked={checked} type="checkbox" onChange={() => {
                props.updateTask(props.list.id, props.id, props.title, !props.completed)
                // props.listitem.completed = !props.listitem.completed
                // setChecked(props.listitem.completed)
                // props.setData(Object.assign([], props.data))
                console.log("add completed attribute")
            }}/>
            <label>{props.listitem}</label><br/>
            <div className={"edit-delete-button-container"}>
            <img className="edit-delete-button" onClick={() => setShowAlert(true)} src={"edit-solid.svg"}></img>
            <img className="edit-delete-button" onClick={(e) => props.handleTaskDelete(e)} src={"times-solid.svg"}></img>
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
            {currentTasks.map((x) => <ListsItemDisplay updateTask={props.updateTask} setTasks={setTasks} currentTasks={currentTasks} list={props.list} setData={props.setData} data={props.data} id={x[0]} listitem={x[1]} completed={x[2]}/>)}
            {/*{for (x of liststuff) <ListsItemDisplay list={props.list} key={0} setData={props.setData} data={props.data} listitem={x}/>}*/}
            {/*{currentTasks.map((y) => <ListsItemDisplay list={props.list} key={y.id} setData={props.setData} data={props.data} listitem={y}/>)}*/}

            {/*<ListsItemDisplay list={props.data[0]} key={props.data[0].id} setData={props.setData} data={props.data} listitem={"Call me"}/>*/}

            {/*{props.list.collection("Tasks")[0]}*/}
            {/*props.list.collection("Tasks").*/}
            {/*.filter((x) => !x.completed)*/}
            {/*.map((y) => <ListsItemDisplay list={props.list} key={y.id} setData={props.setData} data={props.data} listitem={y}/>)}*/}
            {/*<p>{props.data[0]}</p>*/}
            {/*{*/}
            {/*.filter((x) => !x.completed)*/}
            {/*{ props.list.collection("Tasks").map((y) => <ListsItemDisplay list={props.list.collection("Tasks")} key={y.id} setData={props.setData} data={props.data} listitem={y}/>)}*/}
            {/*<hr/>*/}
            {/*<h3>Completed:</h3>*/}
            {/*{*/}
            {/*{*/}
            {/*props.list.listItems*/}
            {/*    .filter((x) => x.completed)*/}
            {/*    .map((y) => <ListsItemDisplay list={props.list} key={y.id} setData={props.setData} data={props.data} listitem={y}/>)}*/}
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