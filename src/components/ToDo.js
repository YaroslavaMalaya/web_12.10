import Button from "./Button";

function ToDo({label, date}){
    function clickReceived(event){
        console.log('parent', event)
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