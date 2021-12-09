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

function App(props) {

    let [selectedPage, setPage] = useState({
        type: "trueHome"
    })



    // Start Auth
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [passwordValid, setValidity] = useState(true)
    const [signupValid, setSignupValid] = useState(true);

    function handleSignUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Signed Up!");
                setUser(user);
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
                setUser(user);
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
                setUser(user);
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
                    <input className="authitems" placeholder={"Password"} type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
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
                    <input className="authitems" placeholder={"Password"} type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="authitems" className={"authSubmit"} onClick={() => handleSignUp(userEmail, userPassword)}> Sign Up </button>
                    <p className={"authOption"}>or</p>
                    <button className="authitems" className={"authSubmit"} onClick={() => handleGoogleSignIn()}>Sign Up with Google</button>
                </div>
            </>
        ),
        "trueHome": (
            <div className={"home-page"}>
                <h1 className={"homeName"}>CATA LIST</h1>
                <p className={"subtitle"}>By Lucas and Lauren</p>
                <div className={"buttons-box"}>
                    <div className={"authbuttons"}>
                        <button className={"front-page-buttons"} onClick={() => setPage({type: "signIn"})}>Sign In</button>
                        <p className={"authOption"}>or</p>
                        <button className={"front-page-buttons"} onClick={() => setPage({type: "signUp"})}>Create an Account</button>
                    </div>`
                </div>
            </div>

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

    const collectionName = "App_Data";
    const query = db.collection(collectionName).where("sharedWith", "array-contains", props.user.email);
    const [hasFetchedTask, setFetch] = useState(false);
    let collectionRef = db.collection(collectionName);
    const [value, loading, error] = useCollection(query)
    if (!loading) {
        if (value){
            value.docs.map(async (x) => console.log((await getDoc(x.ref)).data().title))
        }
    }
    let data = null;
    if (value) {
        data = loading === false ? value.docs.map((element) => element.data()) : []
    }
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
            owner: props.user.uid,
            sharedWith: [props.user.email]
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
            created: firebase.database.ServerValue.TIMESTAMP,
            owner: props.user.uid,
            sharedWith: [props.user.email]
        }
        list.collection("tasks").doc(Task.id).set(Task)
        setFetch(false)
    }

    async function handleShare(email, id) {

        // const List = collectionRef.doc(id).get()
        // console.log(List);
        const docSnap = await getDoc(collectionRef.doc(id));
        if (props.user.uid != docSnap.data().owner) {
            console.log("You do not have permision to do this.")
        }
        else {
            if (docSnap.exists()) {
                if (props.user.email == email) {
                    console.log("You are the owner, you already have access to this list")
                }
                await collectionRef.doc(id).update({
                    sharedWith: [...docSnap.data().sharedWith, email]
                })
            } else {
                console.log("No such document!");
            }
        }
    }

    async function handleUnShare(email, id) {

        // const List = collectionRef.doc(id).get()
        // console.log(List);
        const docSnap = await getDoc(collectionRef.doc(id));
        if (props.user.uid != docSnap.data().owner) {
            console.log("You do not have permision to do this.")
        }
        else {
            if (docSnap.exists()) {
                if (props.user.email == email) {
                    console.log("You are the owner, you can't remove yourself.")
                }
                let unShareEmail = docSnap.data().sharedWith
                const newSharedEmails = unShareEmail.filter((singularEmail) => singularEmail != email);
                console.log("unShareEmail", newSharedEmails)

                await collectionRef.doc(id).update({
                    sharedWith: newSharedEmails
                })
            } else {
                console.log("No such document!");
            }
        }
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
            .collection("tasks")
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
        await collectionRef.doc(listid).collection("tasks").doc(taskid).delete();
        setFetch(false)
    }

    const pageRenderLookup = {
        "home": (
            <>
            {loading && <h1>Loading</h1>}
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
                {data && <Lists handleUnShare={handleUnShare} handleShare={handleShare} user={props.user} collectionRef={collectionRef} query={useCollection} deleteTask={deleteTask} updateTask={updateTask} setFetch={setFetch} fetch={loading} data={data.filter((x) => x.id == selectedPage.selectedId)} getDocInfo={getDocInfo} addListItem={addListItem} list={collectionRef.doc(selectedPage.selectedId)}/>}
            </>
        )
    }
    return <div>{pageRenderLookup[selectedPage.type]}</div>
}

export default App;
