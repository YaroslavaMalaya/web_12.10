import Button from "./Button";

function ToDo({label, date, onToDoRemoveClick}){
    function clickReceived(event){
        onToDoRemoveClick(label);
    }

    return (
        <div>
            <div>{label}</div>
            <div>{date}</div>
            <Button title={"remove"} onButtonClick={clickReceived}></Button>
        </div>
    );
}

export default ToDo;