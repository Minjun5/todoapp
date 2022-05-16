import styled from "styled-components";
import React from "react";
import TodoLeft from "../TodoLeft/index2";
import styled from "styled-components";
import React from "react";
import TodoLeft from "../TodoLeft/index2";
import TodoAdd from "../TodoAdd";
import TodoDate from "../Tododate/index1";
import Todoitem from "../todoitem/index3";
import { useState } from "react";
import { defaults, initial } from "lodash";
const Container = styled.div`
background-color: yellow;
height:100vh;
// display:flex;
// justify-content: center;
`;
const Input=styled.input``
const putUserinfo=(e)=>{
    const {name,value}=e.target;
    console.log(name)
    console.log(value)
    setuser({...user,
    [name]:value}
    );console.log(user)
    }
function Mainpage(){
    
    const [user, setuser]=useState({
        id:"",
        password:""
    })
    return(
    <Container>
    
        <TodoDate/>
        <TodoLeft todos={todos.length}/>
    
        <TodoAdd todos={todos} updateTodo={addTodo}/>
        <Todoitem/>
        <Input type="text" name="ID" onChange={putUserinfo}></Input>
        
        
    
    </Container> 
    )
}






export default Mainpage;
