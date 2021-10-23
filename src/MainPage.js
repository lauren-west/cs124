import './main.css'
import React, {useState} from "react";
import Alert from "./Alert";
import {useCollection} from "react-firebase-hooks/firestore";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCd9qqxvMpEKpBzwfWcc2tlRFa6ICaLH_s",
    authDomain: "hmc-cs124-fa21-labs.firebaseapp.com",
    projectId: "hmc-cs124-fa21-labs",
    storageBucket: "hmc-cs124-fa21-labs.appspot.com",
    messagingSenderId: "949410042946",
    appId: "1:949410042946:web:0113b139a7e3cd1cc709db"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function ListsDisplay(props) {
    const [showAlert, setShowAlert] = useState(false);
    function handleAlertOK(listName) {
        props.list.title = listName;
        props.setData(Object.assign([], props.data))
    }
    function handleDelete(e) {
        e.stopPropagation()
        props.setData(props.data.filter((list) => list.id !== props.list.id))
    }

    return (
        <>
            <div onClick={() => props.onClick(props.list.id)} className="boxes" id="list-box-1">
                <img src="list-solid.svg"/>
                <span>{props.list.title}</span>
                <div className={"edit-delete-button-container"}>
                    <img className="edit-delete-button" onClick={(e) => {
                        e.stopPropagation()
                        setShowAlert(true)
                    }} src={"edit-solid.svg"}/>
                    <img className="edit-delete-button" onClick={handleDelete} src={"times-solid.svg"}></img>
                </div>

            </div>
            <Alert inputValue={props.list.title} visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleAlertOK} cancelName={"Don't Edit List"} okName={"Edit List"}>
                <div>Edit List:</div>
            </Alert>
        </>
    )
}

function MainPage(props) {
    const [showAlert, setShowAlert] = useState(false);
    const collectionName = "lwest-hmc-tasks2"
    const query = db.collection(collectionName)
    const [value, loading, error] = useCollection(query)
    const collectionRef = db.collection(collectionName);
    const data = !loading ? value.docs.map((element)=> element.data()) : []
   /* const docRef = collectionRef.doc(generateUniqueID())

    docRef.set({
        created: firebase.database.ServerValue.TIMESTAMP
    })*/

    function handleAlertOK(listName) {
        props.setData([...props.data, {
                id: props.data.length,
                title: listName,
                listItems: []
            }
            ]
        )
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            <h1 id="MyLists">My Lists</h1>
            {data.map((x) => <ListsDisplay setData={props.setData} data={data} list={x} onClick={props.onListClick}/>)}
            <div id="button1">
                <button onClick={() => setShowAlert(true)} className="addList addTask">
                    <img src="plus-solid.svg"/>
                    <span>Add List</span>
                </button>
            </div>
            <Alert inputValue={""} visible={showAlert} onClose={() => setShowAlert(false)} onOk={handleAlertOK} cancelName={"Don't Add List"} okName={"Add List"}>
                <div>Add List:</div>
            </Alert>
        </>
    )
}

export default MainPage;