import React, { useState } from "react";

const ToDoList = () => {

const [allValues, setAllValues] = useState ([])
const [inputValue, setInputValue] = useState ("");

const addItem = (event) => {
event.preventDefault();
setAllValues(allValues => [...allValues, inputValue]);
}

// preventdefault por qué?

const removeItem = (index) => {
const newList = allValues.filter((task, id) => index !== id);
setAllValues(newList);
}

// qué pasa aquí
 

return (
<div className="col-12 d-block justify-content-center">
    <form className="form-control form-control-lg" onSubmit={addItem}><input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue}/></form> <hr></hr>
    <div>
        <ul className="list-group">{allValues.map((task, index) => <li className="list-group-item" key={index}><div className="col-12 d-flex"><div className="col-8">{task}</div><div className="col-4"><button className="btn-danger btn-md" onClick={(event) => removeItem(index)}>Remove task</button></div></div></li>)}
        </ul>
    </div>
    <div>{allValues.length == 0 ? "No pending tasks, add something" : allValues.length + " task(s) left"}</div>
</div>

)
};
export default ToDoList;