import Item from "./Item";
import TO_DOS from "../mocks/todos";
import ToDo from "./ToDo";
import Input from "./input";
import { useState } from "react";

export function List(){
    const [listItems, setListItems] = useState(TO_DOS);

    function removeItem(label) {
        let filteredItems = listItems
            .filter(item => item.label !== label);
        setListItems(filteredItems);
    }
    function addItem(newLabel) {
        setListItems([...listItems, {label: newLabel}]);
    }
    
    return(
        <div>
            <Input onInputValueChanged={addItem}></Input>
            {listItems.map(i=> 
            <ToDo key={i} label={i.label} date={i.date} onToDoRemoveClick={removeItem}>
            </ToDo>)}
        </div>
    )
}

export default List;