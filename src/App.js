import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./Components/ToDoLists";

function App() {
  const [inputList, setInputList] = useState(" ");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldArray) => {
      return [...oldArray, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) =>{
setItems((oldArray)=>{
  return oldArray.filter((arrElem, index)=>{
return index !== id;
  })
})
  };

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1> ToDo List</h1>
        <br />
        <input
          type='text'
          placeholder='Add items here'
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}> + </button>

        <ol>
          {items.map((itemVal, index) => {
         return   <ToDoLists text={itemVal} 
         key={index}
         id={index}
         onSelect={deleteItems}
         />
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
