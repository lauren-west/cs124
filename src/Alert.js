import {useState} from "react";

function Alert(props) {
    let [input, setInput] = useState(props.inputValue);
    if (!props.visible){
        return null;
    }
    return (
        <div className={"backdrop"}>
            <div className="modal">
                {props.children}
                <input type="text" name="name" value={input}
                       onChange={(e) => setInput(e.target.value)}/>
                <div className="alert-buttons">
                    <button className={"alert-button alert-cancel"} type={"button"}
                            onClick={props.onClose}>
                        {props.cancelName}
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={() => {
                                setInput("");
                                props.onOk(input);
                                props.onClose();}}>
                        {props.okName}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Alert;