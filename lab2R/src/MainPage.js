import './main.css'
import React, {useState} from "react";

// props is data[i]
function ListsDisplay(props) {
    return (
        <div className="list-box" id="list-box-1" onClick={() => props.onClick(props.list.id)}>
            <p id="list-1">
                <img src="listIcon.png"/>
                <span>{props.list.title}</span>
            </p>
            <hr/>
        </div>
    )
}

function MainPage(props) {
    return (
        <div>
            <h1 id="MyLists">My Lists</h1>
            {props.data.map((x) => <ListsDisplay list={x} onClick={props.onListClick}/>)}
            <div id="button1">
                <button onclick="" id="addTask">
                    <img src="plus_best.png"/>
                    <span>Add List</span>
                </button>
            </div>
        </div>
    )
}


export default MainPage;