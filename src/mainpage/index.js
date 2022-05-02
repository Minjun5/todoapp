import styled from "styled-components";
import React from "react";
import TodoLeft from "../TodoLeft/index2";
import TodoAdd from "../TodoAdd";
import TodoDate from "../Tododate/index1";
import Todoitem from "../Todoitem/index3";
import { useState } from "react";
import { initial } from "lodash";

const Container = styled.div`
background-color: yellow;
height:100vh;
// display:flex;
// justify-content: center;
`;




function Mainpage(){
   const [todos,setodos]=useState([]);
    initial={
        age:null,
    }
    return(
    <Container>
    
        <TodoDate/>
        <TodoLeft/>
    
        <TodoAdd/>
        <Todoitem/>
        
        
        
    
    </Container> 
    )
}






export default Mainpage;
