import {useState} from "react";

function Alert(props) {
    let [input, setInput] = useState(props.inputValue);
    function handleClose(){
        setInput(props.inputValue);
        props.onClose();
    }

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
                            onClick={handleClose}>
                        {props.cancelName}
                    </button>
                    <button className={"alert-button alert-ok"} type={"button"}
                            onClick={() => {
                                props.onOk(input);
                                handleClose();
                                setInput("");}}>
                        {props.okName}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Alert;