import logo from './logo.svg';
import './AlertApp.css';
import React, {useState} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, doc, setDoc, query, where, getDoc, getDocs} from "firebase/firestore";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const firebaseConfig = {
    apiKey: "AIzaSyCcQ6XCOvMIA7pHME4bWBgy_7OVy_7XErA",
    authDomain: "cs124-fall2021.firebaseapp.com",
    projectId: "cs124-fall2021",
    storageBucket: "cs124-fall2021.appspot.com",
    messagingSenderId: "264318304667",
    appId: "1:264318304667:web:4be8d27a02811b1ccd613e"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



function App() {

    const collectionName = "lewing-hmc-tasks"
    const subCollectionName = "Tasks"
    const query = db.collection(collectionName);
    const [hasFetchedTask, setFetch] = useState(false);
    let collectionRef = db.collection(collectionName)
    const [value, loading, error] = useCollection(query)
    if (!loading) {
        value.docs.map(async (x) => console.log((await getDoc(x.ref)).data().title))
    }

    const data = loading === false ? value.docs.map((element)=> element.data()) : []

    const [showAlert, setShowAlert] = useState(false);
    const [showEditAlert, setShowEditAlert] = useState(false);
    let [listId, setListId] = useState(0);
    let [selectedPage, setPage] = useState({
        type: "home"
    })

    function handleAddList(listName) {
        const List = {
            id: generateUniqueID(),
            title: listName
        }
        collectionRef.doc(List.id).set(List)
    }


    function handleDeleteList(id, e){
        //console.log(id)
        collectionRef.doc(id).delete()
        e.stopPropagation()
    }

    function handleTaskDelete(e, listid, taskid){
        // console.log()
        // collectionRef.doc(id).delete()
        e.stopPropagation()
    }

    function addListItem(list, itemName){
        const Task = {
            id: generateUniqueID(),
            title: itemName
        }
        list.collection(list.id).doc(Task.id).set(Task)
        setFetch(false)
    }

    async function getDocInfo(id){
        let currTasks = [];
        const q = collectionRef.doc(id).collection(id);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data().title);
            currTasks.push(doc.data().title);
        });
        return currTasks;
    }


    const pageRenderLookup = {
        "home": (
                <MainPage handleDelete={handleDeleteList} setData={handleAddList} data={data} onListClick={(n) =>
                    // console.log("transfering from main to lists page... selectedID:", n) &&
                    setPage({
                    type: "list",
                    selectedId: n
                })}/>
        ),
        "list": (
            <>
                {console.log("rendering lists!... ", selectedPage)}
                <img onClick={() => setPage({type: "home"})} src={"long-arrow-alt-left-solid.svg"} className={"back-arrow"}/>
                <Lists setFetch={setFetch} fetch={hasFetchedTask} getDocInfo={getDocInfo} addListItem={addListItem} deleteListItem={handleTaskDelete} data={data.filter((x) => x.id == selectedPage.selectedId)} list={collectionRef.doc(selectedPage.selectedId) }/>
            </>
        )
    }
    return pageRenderLookup[selectedPage.type]
}

export default App;
