import {useState} from "react";

function AlertEdit(props) {
    let [input, setInput] = useState(props.inputName);
    return (
        <div className={"backdrop"}>
            <div className="modal">
                {props.children}
                <input type="text" name="name" value={input}
                       onChange={(e) => setInput(e.target.value)}/>
                <div className="alert-buttons">
                    <button className={"alert-button alert-delete"} type={"button"}
                            onClick={() => {
                                console.log("Don't Delete me, I am scared")
                                props.onDelete()
                                props.onClose();}}>
                        Delete
                    </button>
                    <button className={"alert-button alert-cancel"} type={"button"}
                            onClick={props.onClose}>
                        {props.cancelName}
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={() => {
                        props.onOk(input);
                        props.onClose();}}>
                        {props.okName}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AlertEdit;