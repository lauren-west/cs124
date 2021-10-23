import logo from './logo.svg';
import './AlertApp.css';
import React, {useState} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import DATA from "./InMemoryApp";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection, useDocument, DocumentDataHook, DocumentHook} from "react-firebase-hooks/firestore";

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

function App() {
    const collectionName = "lwest-hmc-tasks"
    const [showAlert, setShowAlert] = useState(false);
    const [showEditAlert, setShowEditAlert] = useState(false);
    const [currentTask, setCurrentTask] = useState("");
    const [data, setData] = useState(DATA);
    const [listId, setListId] = useState(0);
    const [selectedPage, setPage] = useState({
        type: "home"
    })

    const collectionRef = db.collection(collectionName);

    const docRef = collectionRef.doc(generateUniqueID())

    docRef.set({
            created: firebase.database.ServerValue.TIMESTAMP
    })

    const pageRenderLookup = {
        "home": (
                <MainPage setData={setData} data={data} onListClick={(n) => setPage({
                    type: "list",
                    selectedId: n
                })}/>
        ),
        "list": (
            <>
                <img onClick={() => setPage({type: "home"})} src={"long-arrow-alt-left-solid.svg"} className={"back-arrow"}/>
                <Lists setData={setData} data={data} list={data[selectedPage.selectedId]}/>
            </>
        )
    }
    return pageRenderLookup[selectedPage.type]
}

export default App;
