import styled from "styled-components";
import React from "react";
import { useState } from "react";

const Container=styled.div``

const Img = styled.img`
width:30px;
height:30px;
`;

const[todos,setTodos]=useState([{isDone:null ,text:"", id:null }])
const removeTodo=(todos)=>{
    setTodos([...null])
}



function e() {
    const [todos, setTodos]=useState([{isDone:null, text:"",id:null}])
    const removeTodo=(todo)=>{
        setTodos([...null])
    }
    return(
        
        <Container>
            
        <Img src="https://cdn2.vectorstock.com/i/1000x1000/01/71/trash-can-icon-vector-13490171.jpg" todos={todos} updateTodo={removeTodo}/>
        </Container>
        
    )
}

export default e