import "./main.css"
import {Data} from "./InMemoryApp"
import React, {useEffect, useState, useMemo} from "react";


function handleDeleteCheck(props, x){
    x(true)
     setTimeout(() => {
         props.handleDelete(props.data[props.selectedId].listItems.filter(listItemName => !listItemName.includes(props.listitem)))
         x(false)
     }, 750)
}

// function isChecked(props){
//     return props.data[props.selectedId].listItems[props.index] === props.listitem
// }

function ListsItemDisplay(props){
    let [isChecked, setChecked] = useState(false)
    return (
    <div id="box1" className="boxes">
        <input checked={isChecked} onChange={() => handleDeleteCheck(props, setChecked)} type="checkbox" />
        <label>{props.listitem}</label><br/>
    </div>
    )
}

function Lists(props)
{
    return (
        <div>
            <h1>{props.data[props.selectedId].title}</h1>
            {props.data[props.selectedId].listItems.map((x, index) => <ListsItemDisplay selectedId={props.selectedId} index={index} handleDelete={props.handleDelete} data={props.data} listitem={x}/>)}
            <div id="button1">
                <button onClick={() => {props.setShowAlert(true)}} id="addTask">
                    <img src="plus_best.png"/>
                    <span>Add Task</span>
                </button>
            </div>
        </div>
    )
}

export default Lists;