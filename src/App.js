import './AlertApp.css';
import React, {useState} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, doc, setDoc, query, where, getDoc, getDocs, updateDoc, deleteDoc, Timestamp} from "firebase/firestore";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './main.css';

import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
// let firebase = require('firebase');
// let firebaseui = require('firebaseui');
// let ui = new firebaseui.auth.AuthUI(firebase.auth());

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

const auth = getAuth();
const provider = new GoogleAuthProvider();
// const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider();


function App(props) {

    // const collectionName = "lewing-hmc-tasks2"
    // const query = db.collection(collectionName);
    // const [hasFetchedTask, setFetch] = useState(false);
    // let collectionRef = db.collection(collectionName)
    // const [value, loading, error] = useCollection(query)
    // if (!loading) {
    //     value.docs.map(async (x) => console.log((await getDoc(x.ref)).data().title))
    // }
    // const data = loading === false ? value.docs.map((element)=> element.data()) : []
    //
    // const [showAlert, setShowAlert] = useState(false);
    // const [showEditAlert, setShowEditAlert] = useState(false);
    // let [listId, setListId] = useState(0);
    let [selectedPage, setPage] = useState({
        type: "trueHome"
    })



    // Start Auth
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [passwordValid, setValidity] = useState(true)
    const [signupValid, setSignupValid] = useState(true);

    function handleSignUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Signed Up!");
                setUser(user.uid);
                setPage({type: "home"});

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("try signing up again!")
                setSignupValid(false);

                // ..
            });


    }

    function handleSignIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user.uid);
                // ...
                console.log("Signed In!");
                console.log(user);
                setPage({type: "home"});


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("try signing in again!");
                setValidity(false);
            });
    }

    function handleGoogleSignIn(){
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                setUser(user.uid);
                console.log("Signed In!");
                console.log(user);
                setPage({type: "home"});
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("try signing in again!");
                setValidity(false);
                // ...
        });
    }



    // End Auth
    //
    // function handleAddList(listName) {
    //     const List = {
    //         id: generateUniqueID(),
    //         title: listName,
    //     }
    //     collectionRef.doc(List.id).set(List)
    //
    // }
    //
    //
    // function handleDeleteList(id, e){
    //     collectionRef.doc(id).delete()
    //     e.stopPropagation()
    // }
    //
    // function setFetchAndPage(){
    //     setFetch(false);
    //     setPage({type: "home"});
    // }
    //
    // function addListItem(list, itemName, priority){
    //     const Task = {
    //         id: generateUniqueID(),
    //         title: itemName,
    //         completed: false,
    //         priority: priority, // planning on tiny, medium, high
    //         created: firebase.database.ServerValue.TIMESTAMP
    //     }
    //     list.collection(list.id).doc(Task.id).set(Task)
    //     setFetch(false)
    // }
    //
    // async function getDocInfo(id){
    //     let currTasks = [];
    //     if(!loading){
    //         const q = collectionRef.doc(id).collection(id);
    //         const querySnapshot = await getDocs(q);
    //         querySnapshot.forEach((doc) => {
    //             currTasks.push([doc.data().id, doc.data().title, doc.data().completed, doc.data().priority]);
    //     });}
    //     return currTasks;
    // }
    //
    // async function updateTask(listid, taskid, title_val, comp_value, priority_value){
    //     await collectionRef.doc(listid)
    //         .collection(listid)
    //         .doc(taskid)
    //         .update({
    //             title: title_val,
    //             completed: comp_value,
    //             priority: priority_value
    //         });
    //     setFetch(false)
    // }
    //
    // async function updateList(id, title_val){
    //     await collectionRef.doc(id).update({
    //             title: title_val
    //         })
    // }
    //
    // async function deleteTask(listid, taskid){
    //     await collectionRef.doc(listid).collection(listid).doc(taskid).delete();
    //     setFetch(false)
    //
    // }
    function handleSignOut(){
        setPage({type: "trueHome"});

    }

    const pageRenderLookup = {
        "signIn": (
            <>
                <img tabIndex="0" onKeyPress={(event) => {(event.key === "Enter"||event.code === "Space") && setPage({type: "trueHome"})}} onClick={() => setPage({type: "trueHome"})} alt={"Back Arrow"} src={"long-arrow-alt-left-solid.svg"} className={"back-arrow"}/>
                <h1 className={"homeName"}>Sign into your Account</h1>
                {!passwordValid && <p className={"wrongPass"}>Wrong username or password</p>}
                <div className={"authbuttons"}>
                    <input className="authitems" placeholder={"Email"} type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="authitems" placeholder={"Password"} type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="authitems" className={"authSubmit"} onClick={() => handleSignIn(userEmail, userPassword)}> Sign In </button>
                    <p className={"authOption"}>or</p>
                    <button className="authitems" className={"authSubmit"} onClick={() => handleGoogleSignIn()}>Sign In with Google</button>
                </div>
            </>
        ),
        "signUp": (
            <>
                <img tabIndex="0" onKeyPress={(event) => {(event.key === "Enter"||event.code === "Space") && setPage({type: "trueHome"})}} onClick={() => setPage({type: "trueHome"})} alt={"Back Arrow"} src={"long-arrow-alt-left-solid.svg"} className={"back-arrow"}/>
                <h1 className={"homeName"}>Create an Account</h1>
                {!signupValid && <p className={"wrongPass"}>Invalid email or password</p>}
                <div className={"authbuttons"}>
                    <input className={"authitems"} placeholder={"Email"} type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className="authitems" placeholder={"Password"} type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="authitems" className={"authSubmit"} onClick={() => handleSignUp(userEmail, userPassword)}> Sign Up </button>
                    <p className={"authOption"}>or</p>
                    <button className="authitems" className={"authSubmit"} onClick={() => handleGoogleSignIn()}>Sign Up with Google</button>
                </div>
            </>
        ),
        "trueHome": (
            <>
                <h1 className={"homeName"}>Home</h1>
                <div className={"authbuttons"}>
                <button onClick={() => setPage({type: "signIn"})}>Sign In</button>
                <p className={"authOption"}>or</p>
                <button className={"authSubmit"} onClick={() => setPage({type: "signUp"})}>Create an Account</button>
                </div>
            </>
        ),
        "home": (
            <div>
                <SignedInPage {...props} user={user} signOut={() => handleSignOut()}/>
            </div>
        )
    }
    return pageRenderLookup[selectedPage.type]
}


function SignedInPage(props) {

    const collectionName = props.user;
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



    // End Auth

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
            <>
                <signedInPage/>
                <button onClick={() => props.signOut()}> Sign Out </button>
                <MainPage updateList={updateList} handleDelete={handleDeleteList} setData={handleAddList} data={data} onListClick={(n) =>
                    setPage({
                        type: "list",
                        selectedId: n
                    })}/>
            </>
        ),
        "list": (
            <>
                <img tabIndex="0" onKeyPress={(event) => {(event.key === "Enter"||event.code === "Space") && setFetchAndPage()}} onClick={() => setFetchAndPage()} alt={"Back Arrow"} src={"long-arrow-alt-left-solid.svg"} className={"back-arrow"}/>
                <Lists collectionRef={collectionRef} query={useCollection} deleteTask={deleteTask} updateTask={updateTask} setFetch={setFetch} fetch={loading} data={data.filter((x) => x.id == selectedPage.selectedId)}  getDocInfo={getDocInfo} addListItem={addListItem} list={collectionRef.doc(selectedPage.selectedId)}/>
            </>
        )
    }
    return <div>{pageRenderLookup[selectedPage.type]}</div>

}

export default App;
