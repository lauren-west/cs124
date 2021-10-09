import {useState} from "react";

function Alert(props){
    let [listName, setListName] = useState("");
    let [listItemName, setListItemName] = useState("");
    if (props.selectedId === -1){
        return (
        <div className={"backdrop"}>
            <div className="modal">
                {props.children}
                <div className="alert-buttons">
                    <label>
                        Name:
                        <input type="text" name="name" value={listName} onChange={(e) => setListName(e.target.value)} />
                    </label>
                    <button className={"alert-button alert-cancel"} type={"button"}
                            onClick={props.onClose}>
                        {props.cancelName}
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={() => {
                                props.onOk(listName);
                                props.onClose();
                            }}>
                        {props.okName}
                    </button>
                </div>
            </div>
        </div>
        )}
    else {
        return(
        <div className={"backdrop"}>
            <div className="modal">
                {props.children}
                <div className="alert-buttons">
                    <label>
                        Name:
                        <input type="text" name="name" value={listItemName} onChange={(e) => setListItemName(e.target.value)} />
                    </label>
                    <button className={"alert-button alert-cancel"} type={"button"}
                            onClick={props.onClose}>
                        {props.cancelName}
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={() => {
                                props.onOkItem(listItemName);
                                props.onClose();
                            }}>
                        {props.okName}
                    </button>
                </div>
            </div>
        </div>
    )}
}

export default Alert;
