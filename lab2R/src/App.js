import logo from './logo.svg';
import './App.css';
import './AlertApp.css';
import React, {useEffect, useState, useMemo} from "react";
import MainPage from './MainPage'
import Lists from "./Lists";
import DATA from "./InMemoryApp";
import Alert from './Alert'



function App() {
  //responsible for everyhing
  // rendering desired information
    const [showAlert, setShowAlert] = useState(false);
    let [selectedList, setList] = useState(-1);
    let [data, setData] = useState(DATA);

    function handleAlertOK(listName) {
        setData([...data, {
                id: data.length,
                title: listName, // want to throw new title data into here
                listItems: []
            }
            ]
        )
    }
    function handleAlertOKListItem(listItemName) {
        setData(data.map(list => {
            if(selectedList === list.id) {
                list.listItems = [...list.listItems, listItemName];
            }
            return list;
        }))
    }

    function handleDelete(filteredList) {
        setData(data.map(list => {
            if(selectedList === list.id) {
                list.listItems = filteredList
            }
            return list;
        }))
    }

    function toggleModal(){
        setShowAlert(false);
    }
    if (selectedList >= 0){
        return (
            <div>
                <div>
                    <Lists selectedId={selectedList} handleDelete={handleDelete} setShowAlert={setShowAlert} data={data} selectedId={selectedList}/>
                </div>
                {showAlert && <Alert selectedId={selectedList} onClose={toggleModal} onOkItem={handleAlertOKListItem} cancelName={"Don't Add Task"} okName={"Add Task"}>
                    <div>
                    Add Task?
                    </div>
                </Alert>}
            </div>
        )
    } else {
        return (
            <div>
                <div>
                <MainPage setShowAlert={setShowAlert} setData={setData} data={data} onListClick={(n) => setList(n)}/>
                </div>
                {showAlert && <Alert selectedId={selectedList} onClose={toggleModal} onOk={handleAlertOK} cancelName={"Don't Add List"} okName={"Add List"}>
                <div>
                    Add List?
                </div>
            </Alert>}
            </div>)
    }
}

export default App;
