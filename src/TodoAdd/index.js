import { useState } from "react";
import styled from "styled-components";
import e from "../todoitem/index3";

const Textbox=styled.div`
background-color:red;
display:block;`
const Add=styled.button`
background-color:blue;
display:block`
function onclick(){
    alert("ddd")
}
function todoadd({todos, updateTodo}){
    const[todo, seTtodo]=useState({
        text:""
    })
    const addTodo=(e)=>{
    const {name,value}=e.target;
    console.log(name)
    console.log(value)
    setuser({...user,
    [name]:value}
    );console.log(user)
    }
    }
}
function B(){
    
    return(
        
        <div>
            <Textbox>Finish</Textbox>
            <Add onClick={onclick}>Add</Add>
            
            )
        </div>
    )
}

export default B
