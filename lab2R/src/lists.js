import "./main.css"
import {Data} from "./InMemoryApp"
import React, {useEffect, useState, useMemo} from "react";

function ListsItemDisplay(props){
    return (
    <div id="box1" className="boxes">
        <input type="checkbox" className="task1" id="firstTask" name="firstTask" value="lunch"/>
        <label htmlFor="firstTask" className="task1">{props.listitem}</label><br/>
    </div>
    )
}

function Lists(props)
{
    return (

    <div>
        <h1>{props.data[props.selectedId].title}</h1>
        {props.data[props.selectedId].listItems.map((x) => <ListsItemDisplay listitem={x}/>)}
        <div id="button1">
            <button onClick="" id="addTask">
                <img src="plus_best.png"/>
                <span>Add Task</span>
            </button>
        </div>
    </div>

    )
}

export default Lists;