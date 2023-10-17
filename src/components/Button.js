
function Button({title, onButtonClick}){
    
    function handleClick(event){
        onButtonClick(title);
    }

    return (
        <button className={"btn btn-outline-primary btn-info"}
                onClick={handleClick}
        >{title}</button>
    );
}

export default Button;