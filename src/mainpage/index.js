import styled from "styled-components";
import React from "react";
import "./style1.css";
import TodoAdd from "../TodoAdd";
import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoList from "../TodoList";

const Container=styled.div`background-color: aqua;
text-align: center;`

function Mainpage(){
    return(
    <div>
    <Container>
        <TodoDate/>
        <TodoLeft todos={todos}/>
        <Breakline></Breakline>
        <TodoAdd todos={todos} updateTodo={addTodo}/>
        <TodoList todos={todos} delelteTodo={removeTodo}/>
        
        
        
        
    </Container>  
    </div> 
    )
}






export default Mainpage;
