import {useState} from "react";

function Alert(props) {
    let [input, setInput] = useState(props.inputValue);
    let [priority, setPriority] = useState(props.priority)
    function handleClose(){
        console.log(priority);
        setInput(props.inputValue);
        props.onClose();
    }

    if (!props.visible){
        return null;
    }
    // {console.log(setInput(props.inputValue))}
    return (
        <div className={"backdrop"}>
            <div className="modal">
                {props.children}
                <input type="text" name="name" value={input}
                       onChange={(e) => setInput(e.target.value)}/>

                {props.task &&
                <div>
                    <label className={"priority-label"} htmlFor="priority-levels">Priority</label>
                    <select name="priority-levels" id="priority-levels" onChange={(e) => setPriority(e.target.value)}>
                        <option selected={priority === "low" ? true: false} value="low">Low</option>
                        <option selected={priority === "medium" ? true: false} value="medium">Medium</option>
                        <option selected={priority === "high" ? true: false} value="high">High</option>
                    </select>
                </div>}

                <div className="alert-buttons">
                    <button className={"alert-button alert-cancel"} type={"button"}
                            onClick={handleClose}>
                        {props.cancelName}
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={() => {
                                props.onOk(input, priority);
                                handleClose();
                                setInput("")
                                ;}}>
                        {props.okName}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Alert;