import styled from "styled-components";
import React from "react";

function A(){
    const today=new Date();
    console.log(today.getFullYear());
    console.log(today.getMonth()+1)
    console.log(today.getDate())
    return(
    <div>
       {today.getFullYear()}.{today.getMonth()+1}.{today.getDate()}
    </div>
    
    
        
    )
}



export default A
