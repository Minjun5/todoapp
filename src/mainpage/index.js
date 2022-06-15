import styled from "styled-components";
import React from "react";
import TodoLeft from "../TodoLeft/index2";
import TodoAdd from "../TodoAdd";
import TodoDate from "../Tododate/index1";
import Todoitem from "../todoitem/index3";
import Todolist from "../TodoList/index";
import { useState } from "react";
const Container = styled.div`

height:100vh;
// display:flex;
// justify-content: center;
`;


function Mainpage(){
    
    const [todos, setTodos]=useState([]);
    const addTodo=(todo)=>{
        setTodos([...todos,todo])
    }
    const removeTodo=(id)=>{
        console.log(id)
        const newtodos=todos.filter((todo)=>todo.id !=id);
        setTimeout(newtodos)
    }
    const changeisdone=(id)=>{const currentTodo=todos[id-1].filter(todo);
    setchangeisDone(currentTodo)};
    return(
    <Container>
        <TodoDate/>
        <TodoLeft todos={todos}/>
    
        <TodoAdd todos={todos} updateTodo={addTodo}/>
        
        <Todolist todos={todos} deleteTodo={removeTodo}/>
    
    </Container> 
    )
}






export default Mainpage;
