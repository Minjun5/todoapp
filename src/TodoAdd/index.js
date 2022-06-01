import { useState } from "react";
import styled from "styled-components";
import React from "react";
import { text } from "dom-helpers";

const Textbox=styled.div`
background-color:red;
display:block;`
const Add=styled.button`
background-color:blue;
display:block`
const Input=styled.input``

function TodoAdd({todos, updateTodo}){
    const[todo, setTodo]=useState({
        id:null,
        text:"",
        isDone:false,
    })
    
    const addTodo=(e)=>{
    const {name,value}=e.target;
        setTodo({
            id: todos.length,
            isDone:false,
            text: value
        })

    }


const onCLickpage=()=>{
    updateTodo(todo)
}
return(
        <div>
            <Textbox>Finish</Textbox>
            <Add onClick={onCLickpage}>Add</Add>
            <Input type="text" name="ID" value={todo.text} onChange={addTodo}></Input>
            
        </div>
    )}



export default TodoAdd
