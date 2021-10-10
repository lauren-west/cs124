import {useState} from "react";

function Alert(props) {
    let [input, setInput] = useState("");
    return (
        <div className={"backdrop"}>
            <div className="modal">
                {props.children}
                <div className="alert-buttons">
                    <label>
                        Name:
                        <input type="text" name="name" value={input}
                               onChange={(e) => setInput(e.target.value)}/>
                    </label>
                    <button className={"alert-button alert-cancel"} type={"button"}
                            onClick={props.onClose}>
                        {props.cancelName}
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={() => {
                                props.onOk(input);
                                props.onClose();
                            }}>
                        {props.okName}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Alert;