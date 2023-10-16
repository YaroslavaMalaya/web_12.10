import Item from "./Item";

function List({list}){
    let listItems = ['one', 'two', 'three'];
    return(
        <div>
            {list.map(i=> <Item key={i} itemText>{i}</Item>)}
        </div>
    )
}

export default List;