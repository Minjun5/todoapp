import styled from "styled-components";

const Textbox=styled.div`
background-color:red;
display:block;`
const Add=styled.button`
background-color:blue;
display:block`
function B(){
    return(
        <div>
            <Textbox>Finish</Textbox>
            <Add>Add</Add>
        </div>
    )
}
export default B
