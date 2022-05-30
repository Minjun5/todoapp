import styled from "styled-components";
import React from "react";
import { useState } from "react";

const Container=styled.div``

const Img = styled.img`
width:30px;
height:30px;
`;



function e({todos, updateTodo}){
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
        
        <Container>
            
        <Img src="https://cdn2.vectorstock.com/i/1000x1000/01/71/trash-can-icon-vector-13490171.jpg" todos={todos} onChange={addTodo} onClick={onCLickpage}/>
        </Container>
        
    )
}

export default e
