import Item from "./Item";
import TO_DOS from "../mocks/todos";
import ToDo from "./ToDo";

export function List(){
    let listItems = TO_DOS;
    return(
        <div>
            {listItems.map(i=> <ToDo key={i} label={i.label} date={i.date}></ToDo>)}
        </div>
    )
}

export default List;