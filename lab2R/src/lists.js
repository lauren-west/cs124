import "./main.css"
import {Data} from "./InMemoryApp"
import React, {useEffect, useState, useMemo} from "react";

// function handleToggle()

function ShowEditAlert(props) {
    props.setCurrentTask(props.listitem.id)
    props.setShowEditAlert(true)
}

function ListsItemDisplay(props){
    let[checked, setChecked] = useState(props.listitem.completed)
    return (
        <div id="box1" className="boxes boxes-blue">
            <input checked={checked} type="checkbox" onChange={() => {
                props.listitem.completed = !props.listitem.completed
                setChecked(props.listitem.completed)
                props.setData(Object.assign([], props.data))
            }}/>
            <label>{props.listitem.text}</label><br/>
            <img className="edit-button" onClick={() => ShowEditAlert(props)} src={"edit-solid.svg"}></img>
        </div>
    )
}

function Lists(props)
{
    return (
        <>
            <h1>{props.data[props.selectedId].title}</h1>
            {
                props.data[props.selectedId].listItems
                    .filter((x) => !x.completed)
                    .map((y) => <ListsItemDisplay setCurrentTask={props.setCurrentTask} key={y.id} setData={props.setData} setShowEditAlert={props.setShowEditAlert} selectedId={props.selectedId} handleDelete={props.handleDelete} data={props.data} listitem={y}/>)}
            <hr/>
            <h3>Completed:</h3>
            {
            props.data[props.selectedId].listItems
                .filter((x) => x.completed)
                .map((y) => <ListsItemDisplay setCurrentTask={props.setCurrentTask} key={y.id} setData={props.setData} setShowEditAlert={props.setShowEditAlert} selectedId={props.selectedId} handleDelete={props.handleDelete} data={props.data} listitem={y}/>)}
            <div id="button1">
                <button onClick={() => {props.setShowAlert(true)}} className="addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add Task</span>
                </button>
            </div>
        </>
    )
}

export default Lists;