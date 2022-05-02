import styled from "styled-components";
import React from "react";

function A(){
    const today=new Date();
    console.log(today.getFullYear());
    console.log(today.getMonth()+1)
    console.log(today.getDate())
    const today1=today.toLocaleDateString("en-US",{weekday:"long"});
    return(
    <div>
       {today.getFullYear()}.{today.getMonth()+1}.{today.getDate()}
       <today1>{today1}</today1>
    </div>
    
    
        
    )
}



export default A
