import './AlertApp.css';
import React, {useState} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, doc, setDoc, query, where, getDoc, getDocs, updateDoc, deleteDoc, Timestamp} from "firebase/firestore";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB8G1WCYinf4GWK7GMzLkP8PlLujGnNqHM",
    authDomain: "cs124-lab.firebaseapp.com",
    projectId: "cs124-lab",
    storageBucket: "cs124-lab.appspot.com",
    messagingSenderId: "385341419353",
    appId: "1:385341419353:web:fe357b4ea465efcdff2648",
    measurementId: "G-PB2T6D5MN8"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

function App() {

    const collectionName = "lewing-hmc-tasks2"
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
            title: listName,
        }
        collectionRef.doc(List.id).set(List)

    }


    function handleDeleteList(id, e){
        collectionRef.doc(id).delete()
        e.stopPropagation()
    }

    function setFetchAndPage(){
        setFetch(false);
        setPage({type: "home"});
    }

    function addListItem(list, itemName, priority){
        const Task = {
            id: generateUniqueID(),
            title: itemName,
            completed: false,
            priority: priority, // planning on tiny, medium, high
            created: firebase.database.ServerValue.TIMESTAMP
        }
        list.collection(list.id).doc(Task.id).set(Task)
        setFetch(false)
    }

    async function getDocInfo(id){
        let currTasks = [];
        if(!loading){
            const q = collectionRef.doc(id).collection(id);
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                currTasks.push([doc.data().id, doc.data().title, doc.data().completed, doc.data().priority]);
        });}
        return currTasks;
    }

    async function updateTask(listid, taskid, title_val, comp_value, priority_value){
        await collectionRef.doc(listid)
            .collection(listid)
            .doc(taskid)
            .update({
                title: title_val,
                completed: comp_value,
                priority: priority_value
            });
        setFetch(false)
    }

    async function updateList(id, title_val){
        await collectionRef.doc(id).update({
                title: title_val
            })
    }

    async function deleteTask(listid, taskid){
        await collectionRef.doc(listid).collection(listid).doc(taskid).delete();
        setFetch(false)

    }

    const pageRenderLookup = {
        "home": (
                <MainPage updateList={updateList} handleDelete={handleDeleteList} setData={handleAddList} data={data} onListClick={(n) =>
                    setPage({
                    type: "list",
                    selectedId: n
                })}/>
        ),
        "list": (
            <>
                <img onClick={() => setFetchAndPage()} alt={"Back Arrow"} src={"long-arrow-alt-left-solid.svg"} className={"back-arrow"}/>
                <Lists collectionRef={collectionRef} query={useCollection} deleteTask={deleteTask} updateTask={updateTask} setFetch={setFetch} fetch={loading} data={data.filter((x) => x.id == selectedPage.selectedId)}  getDocInfo={getDocInfo} addListItem={addListItem} list={collectionRef.doc(selectedPage.selectedId)}/>
            </>
        )
    }
    return pageRenderLookup[selectedPage.type]
}

export default App;
